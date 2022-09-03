/* eslint-disable max-len */
type Colors = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

function errorChecking(...args: number[]): void {
  if (args.some((argument) => argument <= 0)) {
    throw new Error('Values must be greater than zero');
  }
}

function rounder(num: number): number {
  if (typeof num === 'number') {
    return Number(num.toFixed(2));
  }

  return 0;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be a positive numbers');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('3 side should be greater than sum of 2 other sides');
    }
  }

  getArea(): number {
    const semiPeriment: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(semiPeriment * (semiPeriment - this.a) * (semiPeriment - this.b) * (semiPeriment - this.c));

    return rounder(square);
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be a positive number');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    errorChecking(a, b);
  }

  getArea(): number {
    const square: number = this.a * this.b;

    return rounder(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
