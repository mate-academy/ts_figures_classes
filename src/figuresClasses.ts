type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape
  color: Color

  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All values must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of the lengths of any two sides of a triangle'
      + ' must be greater than or equal to the length of the third side');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(public color: Color, public r: number) {
    if (r <= 0) {
      throw new Error('All values must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(public color: Color, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('All values must be greater than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
