
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}
export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side length should be > 0');
    }

    const p = (a + b + c) * 0.5;

    if (a >= p || c >= p || c >= p) {
      throw new Error('This side is too long');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) * 0.5;
    const square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape:Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be a positive number greater than 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor(radius * radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Shape ='rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width or height is not valid');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.round(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
