type Color = 'red' | 'green' | 'blue';

export enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.TRIANGLE;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error("Any side can't be less than 0");
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One of the sides bigger than two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.CIRCLE;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error("Radius can't be less than 0");
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.RECTANGLE;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a < 0 || b < 0) {
      throw new Error("Any side can't be less than 0");
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
