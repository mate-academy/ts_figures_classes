type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length is <= 0');
    }

    const maxSide = Math.max(a, b, c);
    const allSides = [a, b, c].reduce((prev, next) => prev + next, 0);

    if (allSides - maxSide <= maxSide) {
      throw new Error('Wrong sides');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) * 0.5;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(100 * s) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  radius: number;

  color: Color;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Length is <= 0');
    }

    this.radius = radius;
    this.color = color;
    this.shape = 'circle';
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length is <= 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const s = this.width * this.height;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
