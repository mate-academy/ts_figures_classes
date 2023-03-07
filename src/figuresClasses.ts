enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  readonly shape: Shape,
  color: Color,
  getArea(): number
}

function checkFigureProperties(...properties: number[]): void {
  if (properties.some((property: number) => property <= 0)) {
    throw new Error('Figure properties can not be less then zero');
  }
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkFigureProperties(a, b, c);

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Wrong data:'
      + 'You can not build a triangle with these sides');
    }
  }

  readonly shape = Shape.Triangle;

  getArea() : number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkFigureProperties(radius);
  }

  readonly shape = Shape.Circle;

  getArea() : number {
    return Math.trunc((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkFigureProperties(width, height);
  }

  shape = Shape.Rectangle;

  getArea() : number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
