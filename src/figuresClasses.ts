enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

const ERRORS = {
  onlyPositive: 'All numbers must be positive',
  longestSide: 'The longest side of a triangle is >= than a sum of two others',
};

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }

    if (a + c <= b || a + b <= c || c + b <= a) {
      throw new Error(ERRORS.longestSide);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const square = (a + b + c) / 2;
    const res = Math.sqrt(square * (square - a) * (square - b) * (square - c));

    return Number(res.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(res) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const square = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${square}`;
}
