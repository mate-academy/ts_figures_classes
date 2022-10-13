type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  a?: number,
  b?: number,
  c?: number,
  r?: number,
  shape: string,
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0)
    || (a >= b + c || b >= a + c || c >= b + a)
    ) {
      throw new Error('Error');
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public r: number = 1,
  ) {
    if (r <= 0) {
      throw new Error('Error');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    const pi: number = Math.PI;

    return Math.floor((pi * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Error');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: object): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
