type Color = 'red' | 'green' | 'blue';

function rounding(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw new Error('Sides length should be correct');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return rounding(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle {
  shape: string;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius length should be more than 0');
    }
  }

  getArea(): number {
    return rounding(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Sides length should be more than 0');
    }
  }

  getArea(): number {
    return rounding(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
