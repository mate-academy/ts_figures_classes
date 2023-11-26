export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || c + b <= a
    ) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    )) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle!');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
