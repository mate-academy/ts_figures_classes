export function rounder(longNumber: number): number {
  return Math.floor(longNumber * 100) / 100;
}

export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((number) => number <= 0)) {
      throw new Error('One of the sides less than 1');
    }

    const arr:number[] = [a, b, c].sort((x, y) => x - y);

    if (arr[2] >= arr[0] + arr[1]) {
      throw new Error("Longest side can't be longer than sum of two others");
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return rounder(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius less than 1');
    }
  }

  getArea(): number {
    return rounder(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of the sides less than 1');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
