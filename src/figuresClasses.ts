enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${this.a}, ${this.b} and ${this.c}`
      + 'cant form a triangle');
    }
  }

  getArea(): number {
    const calcHalfPer = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(calcHalfPer
      * (calcHalfPer - this.a)
      * (calcHalfPer - this.b)
      * (calcHalfPer - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Number((3.14 * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Number((this.height * this.width).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
