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
const ERROR_MESSAGE_TRIANGLE_LENGTH = `${MAIN_ERROR_MESSAGE}:
  the longest side of a triangle is >= than a sum of two others`;
const ERROR_MESSAGE_TRIANGLE_SIDES = `${MAIN_ERROR_MESSAGE}:
  Side is smaller then 0`;
const ERROR_MESSAGE_CIRCLE = `${MAIN_ERROR_MESSAGE}:
  radius of a circle is smaller than 0`;
const ERROR_MESSAGE_RECTANGLE = `${MAIN_ERROR_MESSAGE}:
  width or height of a rectangle is smaller than 0`;

const handleNumberRound = (square: number): number => {
  return Math.floor(square * 100) / 100;
};

const isTriangleNotValid = (a: number, b: number, c: number): void => {
  if (a + b <= c || a + c <= b || c + b <= a) {
    throw new Error(ERROR_MESSAGE_TRIANGLE_LENGTH);
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error(ERROR_MESSAGE_TRIANGLE_SIDES);
  }
};

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
    isTriangleNotValid(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const square = Math.sqrt(semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c));

    return handleNumberRound(square);
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

    return handleNumberRound(square);
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
  const square = figure.getArea();

  return `A ${color} ${shape} - ${square}`;
}
