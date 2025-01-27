type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;

    if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: string;

  r: number;

  constructor(color: string, r: number) {
    if (r <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
    this.r = r;
  }

  getArea(): number {
    const area: number = Math.PI * this.r ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: string;

  a: number;

  b: number;

  constructor(color: string, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid rectangle sides');
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
