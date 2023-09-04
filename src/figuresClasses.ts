enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

const MAIN_ERROR_MESSAGE = 'Invalid values';
const ERROR_MESSAGE_TRIANGLE = `${MAIN_ERROR_MESSAGE}:
  the longest side of a triangle is >= than a sum of two others`;
const ERROR_MESSAGE_CIRCLE = `${MAIN_ERROR_MESSAGE}:
  radius of a circle is smaller than 0`;
const ERROR_MESSAGE_RECTANGLE = `${MAIN_ERROR_MESSAGE}:
  width or height of a rectangle is smaller than 0`;

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
    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(ERROR_MESSAGE_TRIANGLE);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(square * 100) / 100;
  }
}
export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE_CIRCLE);
    }
  }

  getArea(): number {
    const { radius } = this;
    const square = Math.PI * (radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERROR_MESSAGE_RECTANGLE);
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
