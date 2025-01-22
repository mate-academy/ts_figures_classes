/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/lines-between-class-members */
export interface Figure {
  color: string;
  getArea(): number;
  getShape(): string;
}

export class Triangle implements Figure {
  color: string;
  a: number;
  b: number;
  c: number;
  public shape: string;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't forma triangle`);
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }

  getShape(): string {
    return 'triangle';
  }
}

export class Circle implements Figure {
  color: string;
  radius: number;
  public shape: string;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return Math.floor(area * 100) / 100;
  }

  getShape(): string {
    return 'circle';
  }
}

export class Rectangle implements Figure {
  color: string;
  width: number;
  height: number;
  public shape: string;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;
    return Math.floor(area * 100) / 100;
  }

  getShape(): string {
    return 'rectangle';
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.getShape()} - ${figure.getArea()}`;
}
