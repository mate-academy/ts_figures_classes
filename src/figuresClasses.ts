import {
  INVALID_SIDE_LENGTH_ERROR,
  GEOMETRIC_INCONSISTENCY_ERROR,
  INCORRECT_RADIUS,
  INVALID_RECTANGLE_SIDE_LENGTH,
} from './utils/errorMessage';

enum Shape {
  triangle = 'Triangle',
  circle = 'Circle',
  rectangle = 'Rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

function getTwoDecimalPlaces(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isSideLengthIncorrect = a <= 0 || b <= 0 || c <= 0;
    const isSumOfSideLengthGreater = a >= b + c || b >= a + c || c >= a + b;

    if (isSideLengthIncorrect) {
      throw new Error(INVALID_SIDE_LENGTH_ERROR);
    }

    if (isSumOfSideLengthGreater) {
      throw new Error(GEOMETRIC_INCONSISTENCY_ERROR);
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return getTwoDecimalPlaces(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(INCORRECT_RADIUS);
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return getTwoDecimalPlaces(circleArea);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(INVALID_RECTANGLE_SIDE_LENGTH);
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return getTwoDecimalPlaces(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
