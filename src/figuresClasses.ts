// import { assertAwaitExpression } from '@babel/types';

export interface Figure {
  shape: string;

  color: string;

  getArea(): number;
}

function rounding(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  color: string;

  a: number;

  b: number;

  c: number;

  public shape: string;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = this.constructor.name.toLowerCase();

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Negative sides!');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Not A triangle!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const size = (a + b + c) / 2;

    return rounding(Math.sqrt(size
      * (size - a) * (size - b) * (size - c)));
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = this.constructor.name.toLowerCase();
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Negative Radius!');
    }
  }

  getArea(): number {
    return rounding(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = this.constructor.name.toLowerCase();

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Negative Sides!');
    }
  }

  getArea(): number {
    return (this.height > 0 || this.width > 0)
      ? this.width * this.height
      : 0;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
