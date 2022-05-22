export function rounder(longNumber: number): number {
  return Math.floor(longNumber * 100) / 100;
}

export function error(...params: number[]): void {
  if (params.some((side) => side <= 0)) {
    throw new Error('One of the sides less than 1');
  }
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
    error(a, b, c);

    const arr:number[] = [a, b, c].sort((x, y) => x - y);

    if (arr[2] >= arr[0] + arr[1]) {
      throw new Error("Longest side can't be longer than sum of two others");
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return rounder(Math.sqrt(p * (p - this.a)
 * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    error(radius);
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
    error(width, height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
