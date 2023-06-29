enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'green' | 'red' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isTriangleValid()) {
      throw new Error('Incorrect sizes of sides!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }

  isTriangleValid(): boolean {
    const { a, b, c } = this;
    const longestSide = Math.max(a, b, c);
    const shortestSide = a + b + c - longestSide;

    return a > 0 && b > 0 && c > 0 && longestSide < shortestSide;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!this.isCircleValid()) {
      throw new Error('Circle radius must be a positive number!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }

  isCircleValid(): boolean {
    return this.radius > 0;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!this.isRectangleValid()) {
      throw new Error('Rectangle sides mus be a positive number');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }

  isRectangleValid(): boolean {
    return this.width > 0 && this.height > 0;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
