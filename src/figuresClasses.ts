type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('length must be greater than 0');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error(`sides ${a},
      ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c));

    return square;
  }
}

export class Circle {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('length must be greater than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
