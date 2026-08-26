type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    const [x, y, z] = [a, b, c].sort((n1, n2) => n1 - n2);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Length must be > 0');
    }

    if (z >= x + y) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public r: number,
    public shape: Shape = 'circle',
  ) {
    if (this.r <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const { r } = this;
    const s = Math.PI * r * r;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Sides must be > 0');
    }
  }

  getArea(): number {
    const { a, b } = this;
    const s = a * b;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
