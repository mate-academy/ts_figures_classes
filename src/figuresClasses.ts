export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be positive numbers');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const sides = [this.a, this.b, this.c];
    const maxSide = Math.max(...sides);
    const sumOfOthers = sides.reduce((sum, side) => sum + side, 0) - maxSide;

    if (maxSide >= sumOfOthers) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
