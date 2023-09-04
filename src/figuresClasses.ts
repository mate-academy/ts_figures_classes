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
  getArea(): number;
}

function normalizeArea(areaValue: number): number {
  return Math.trunc(areaValue * 100) / 100;
}

const ERROR_MESSAGE = 'Range Error. Value cannot be <= 0!';

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERROR_MESSAGE);
    }

    if (a + b + c - longestSide <= longestSide) {
      throw new Error('Inconsistent length of triangle sides');
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

    return normalizeArea(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return normalizeArea(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return normalizeArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const getArea = figure.getArea();

  return `A ${color} ${shape} - ${getArea}`;
}
