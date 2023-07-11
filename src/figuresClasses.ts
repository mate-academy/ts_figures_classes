/* eslint-disable max-len */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape
  color: Color
  getArea: () => number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The sides of the triangle must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The longest side of the triangle must be less than the sum of the other two');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('The radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error(
        'The width and height of the rectangle must be greater than 0',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
