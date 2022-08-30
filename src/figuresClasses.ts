export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Sides should be positive');
    }
  }

  getArea(): number {
    const p:number = (this.a + this.b + this.c) / 2;
    const
      area:number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  constructor(color: string, a: number, b: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Sides should be positive');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
