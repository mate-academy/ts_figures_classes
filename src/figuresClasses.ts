enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum ShapeError {
  TRIANGLE_ERROR = 'The specified sides do not form a valid triangle',
  CIRCLE_ERROR = 'The specified radius must be greater than 0',
  RECTANGLE_ERROR = 'The width and height must be greater than 0',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function roundNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

function validateParams(error: ShapeError, ...numbers: number[]): void {
  if (numbers.some((length) => length <= 0)) {
    throw new Error(error);
  }
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateParams(ShapeError.TRIANGLE_ERROR, a, b, c);

    if (
      a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error(ShapeError.TRIANGLE_ERROR);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const semiPerimeterA = semiPerimeter - a;
    const semiPerimeterB = semiPerimeter - b;
    const semiPerimeterC = semiPerimeter - c;

    return roundNumber(Math.sqrt(semiPerimeter
      * semiPerimeterA
      * semiPerimeterB
      * semiPerimeterC));
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateParams(ShapeError.CIRCLE_ERROR, radius);
  }

  getArea(): number {
    const { radius } = this;
    const circleArea = radius ** 2;

    return roundNumber(Math.PI * circleArea);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validateParams(ShapeError.RECTANGLE_ERROR, width, height);
  }

  getArea(): number {
    const { width, height } = this;

    return roundNumber(width * height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
