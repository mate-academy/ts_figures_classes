enum Shapes {
  Circle = 'circle',
  Rectangle = 'rectangle',
  Triangle = 'triangle',
}

type Color = 'red' | 'green' | 'blue';

function roundNumbers(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Circle implements Figure {
  public shape = Shapes.Circle;

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('Incorrect radius');
    }
  }

  getArea(): number {
    return roundNumbers((this.a ** 2) * Math.PI);
  }
}

export class Rectangle extends Circle {
  public shape = Shapes.Rectangle;

  constructor(
    color: Color,
    a: number,
    public b: number,
  ) {
    super(color, a);

    if (a <= 0 || b <= 0) {
      throw new Error('This is not a rectangle');
    }
  }

  getArea(): number {
    return roundNumbers(this.a * this.b);
  }
}

export class Triangle extends Rectangle {
  public shape = Shapes.Triangle;

  constructor(
    color: Color,
    a: number,
    b: number,
    public c: number,
  ) {
    super(color, a, b);

    const sides = [a, b];

    if (sides.some((side: number) => side <= 0)) {
      throw new Error('Dimensions are not valid for triangle');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('These sides don`t create a valid triangle');
    }
  }

  getArea(): number {
    const firstPartOfHeron = 4 * (this.a ** 2) * (this.b ** 2);
    const secondPartOfHeron = ((this.a ** 2) + (this.b ** 2)
      - (this.c ** 2)) ** 2;

    return roundNumbers((1 / 4)
      * ((firstPartOfHeron - secondPartOfHeron) ** (1 / 2)));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
