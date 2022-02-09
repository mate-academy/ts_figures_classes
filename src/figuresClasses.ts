export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectamgle = 'rectangle'
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundToTwoDigits(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (x <= 0 || y <= 0 || c <= 0) {
      throw new Error('Incorrect data for Triangle');
    }

    if (x >= (y + c) || y >= (x + c) || c >= (y + x)) {
      throw new Error('Incorrect data for Triangle');
    }
  }

  getArea(): number {
    const s: number = (this.x + this.y + this.c) / 2;

    return roundToTwoDigits(
      Math.sqrt(s * (s - this.x) * (s - this.y) * (s - this.c)),
    );
  }
}

export class Circle {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error('Incorrect radius for Circle');
    }
  }

  getArea(): number {
    return roundToTwoDigits(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectamgle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect data for Rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
