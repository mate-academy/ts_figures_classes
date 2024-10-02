/* eslint-disable @typescript-eslint/lines-between-class-members */
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';
  color: Color;
  private a: number;
  private b: number;
  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfSides = a + b + c;

    if (maxSide >= sumOfSides - maxSide) {
      throw new Error('This triangle cannot exist');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';
  color: Color;
  private radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.radius = radius;
  }
  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';
  color: Color;
  private width: number;
  private height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and hegiht must be greater than 0');
    }
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
