// import { assertAwaitExpression } from '@babel/types';

export interface Figure {
  shape: string;

  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  a: number;

  b: number;

  c: number;

  public shape: string;

  constructor(color: string, a: number, b: number, c: number, shape: string) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = shape;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Negative sides!');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Not A triangle!');
    }
  }

  getArea(): number {
    const size = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(size
      * (size - this.a) * (size - this.b) * (size - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number, shape: string) {
    this.shape = shape;
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Negative Radius!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number, shape: string) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = shape;

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
  if (figure instanceof Circle) {
    return `A ${figure.color} circle - ${figure.getArea()}`;
  }

  if (figure instanceof Rectangle) {
    return `A ${figure.color} rectangle - ${figure.getArea()}`;
  }

  if (figure instanceof Triangle) {
    return `A ${figure.color} triangle - ${figure.getArea()}`;
  }

  return `A ${figure.color} triangle - ${figure.getArea()}`;
}
