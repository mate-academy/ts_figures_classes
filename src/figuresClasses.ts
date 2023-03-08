enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
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

const TRIANGLE_ERROR = 'Error:'
  + ' The specified sides do not form a valid triangle';

const CIRCLE_ERROR = 'Error:'
  + 'The specified radius must be greater than 0';

const RECTANGLE_ERROR = 'Error:'
  + 'The width and height must be greater than 0';

function makeRoundedNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

function checkCorrectSides(...numbers: number[]): void {
  if (numbers.some((length) => length <= 0)) {
    throw new Error(TRIANGLE_ERROR);
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
    checkCorrectSides(a, b, c);

    if (
      a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error(TRIANGLE_ERROR);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const semiPerimeterA = semiPerimeter - a;
    const semiPerimeterB = semiPerimeter - b;
    const semiPerimeterC = semiPerimeter - c;

    return makeRoundedNumber(Math.sqrt(semiPerimeter
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
    if (radius <= 0) {
      throw new Error(CIRCLE_ERROR);
    }
  }

  getArea(): number {
    const { radius } = this;
    const circleArea = radius ** 2;

    return makeRoundedNumber(Math.PI * circleArea);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(RECTANGLE_ERROR);
    }
  }

  getArea(): number {
    const { width, height } = this;

    return makeRoundedNumber(width * height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
