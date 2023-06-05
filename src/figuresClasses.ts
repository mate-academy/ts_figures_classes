enum Shape {
  triangle = 'triangle',
  circle = 'cirle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  a?: number;
  b?: number;
  c?: number;
  radius?: number;

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const longestSide = Math.max(sideA, sideB, sideC);
    const sumOfAllSides = sideA + sideB + sideC;
    const sumOfSmallSides = sumOfAllSides - longestSide;

    if (longestSide >= sumOfSmallSides) {
      throw new Error('Triangle with given sides doesn\'t exist');
    }

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('The triangle side must be greater than zero!');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle with given radius doesn\'t exist');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('The rectangle side must be greater than zero!');
    }
  }

  getArea(): number {
    const area = this.sideA * this.sideB;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
