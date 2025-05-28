type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'green' | 'red' | 'blue';

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

  constructor(a: number, b: number, c: number, color: Color) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Triangle sides must be greater than 0`);
    }

    const longest = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longest;

    if (longest >= sumOfOthers) {
      throw new Error('Invalid triangle: one side is too long');
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(radius: number, color: Color) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0`);
    }
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.round(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(width: number, height: number, color: Color) {
    if (height <= 0 || width <= 0) {
      throw new Error(`Width and height must be greater than 0`);
    }
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
