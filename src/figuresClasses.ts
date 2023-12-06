export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isZeroSide = a <= 0 || b <= 0 || c <= 0;
    const isSizePossible = a + b <= c || a + c <= b || b + c <= a;

    if (isZeroSide) {
      throw new Error('Sides length must be a positive number');
    }

    if (isSizePossible) {
      throw new Error('One of the sides is too long');
    }
  }

  getArea(): number {
    const halfPer = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      halfPer * (halfPer - this.a) * (halfPer - this.b) * (halfPer - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circles radius must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangles side length must be a positive number');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
