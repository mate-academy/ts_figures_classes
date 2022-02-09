export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectamgle = 'rectangle'
}

export enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;

    if (x <= 0 || y <= 0 || c <= 0) {
      throw new Error('Incorrect coords');
    }

    if (x >= (y + c) || y >= (x + c) || c >= (y + x)) {
      throw new Error('Incorrect coords');
    }
  }

  getArea(): number {
    const s: number = (this.x + this.y + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.x) * (s - this.y) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;

    if (radius <= 0) {
      throw new Error('Incorrect coords');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectamgle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect coords');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
