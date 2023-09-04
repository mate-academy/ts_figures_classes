enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color{
  red = 'red',
  green = 'green',
  blue = 'blue',
}

const INVALID_SIZE_ERROR = 'Invalid sides for this figure';

function roundNumberToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(INVALID_SIZE_ERROR);
    }

    const sides = [a, b, c];
    const biggestSide = Math.max(...sides);
    const sumOfOtherSides = sides.reduce((acc, value) => {
      if (value !== biggestSide) {
        return acc + value;
      }

      return acc;
    });

    if (biggestSide >= sumOfOtherSides) {
      throw new Error(INVALID_SIZE_ERROR);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triangleSquareFormula = Math.sqrt(
      p
      * (p - this.a)
      * (p - this.b)
      * (p - this.c),
    );

    return roundNumberToHundreds(triangleSquareFormula);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(INVALID_SIZE_ERROR);
    }
  }

  getArea(): number {
    const circleSquareFormula = Math.PI * this.radius ** 2;

    return roundNumberToHundreds(circleSquareFormula);
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(INVALID_SIZE_ERROR);
    }
  }

  getArea(): number {
    const rectangleSquareFormula = this.width * this.height;

    return roundNumberToHundreds(rectangleSquareFormula);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const figureArea = figure.getArea();

  return `A ${color} ${shape} - ${figureArea}`;
}
