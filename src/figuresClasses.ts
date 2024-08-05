export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    protected sideA: number,
    protected sideB: number,
    protected sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Triangle side lengths must all be greater than 0.');
    }

    const longestSide = Math.max(sideA, sideB, sideC);
    const perimeter = sideA + sideB + sideC;

    if (longestSide >= perimeter - longestSide) {
      throw new Error(
        `The longest side (${longestSide}) must be shorter than the sum of the other two sides (${sideA + sideB + sideC - longestSide}).`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiPerimeter *
            (semiPerimeter - this.sideA) *
            (semiPerimeter - this.sideB) *
            (semiPerimeter - this.sideC),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
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
      throw new Error(
        'Rectangle width and height must both be greater than 0.',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
