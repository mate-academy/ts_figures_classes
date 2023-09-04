const ERROR_MESSAGE_FOR_WRONG_VALUES = 'Invalid values entered';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

function roundDown(number: number, decimals: number = 2): number {
  const factor = 10 ** decimals;

  return Math.floor(number * factor) / factor;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERROR_MESSAGE_FOR_WRONG_VALUES);
    }

    const longestSide = Math.max(a, b, c);
    const sumOfSides = a + b + c;

    if (sumOfSides - longestSide <= longestSide) {
      throw new Error(ERROR_MESSAGE_FOR_WRONG_VALUES);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimeter
        * (semiPerimeter - a)
        * (semiPerimeter - b)
        * (semiPerimeter - c),
    );

    return roundDown(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE_FOR_WRONG_VALUES);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERROR_MESSAGE_FOR_WRONG_VALUES);
    }
  }

  getArea(): number {
    const { height, width } = this;
    const area = height * width;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
