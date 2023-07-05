type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
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
      throw new Error(
        'All numbers must be positive',
      );
    }

    if (a + c <= b || a + b <= c || c + b <= a) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const res = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(res.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, r: number) {
    this.color = color;
    this.radius = r;

    if (r <= 0) {
      throw new Error(
        'All numbers must be positive',
      );
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(res) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  w: number;

  h: number;

  constructor(color: Color, w: number, h: number) {
    this.color = color;
    this.w = w;
    this.h = h;

    if (h <= 0 || w <= 0) {
      throw new Error(
        'All numbers must be positive',
      );
    }
  }

  getArea(): number {
    return Number((this.w * this.h).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const square = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${square}`;
}
