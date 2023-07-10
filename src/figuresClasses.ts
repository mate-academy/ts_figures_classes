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

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Lengths must be greater than 0.');
    }

    const longestSide = Math.max(sideA, sideB, sideC);
    const sumOfTwoOthers = sideA + sideB + sideC - longestSide;

    if (longestSide >= sumOfTwoOthers) {
      throw new Error('The longest side cannot be greater than'
        + ' or equal to the sum of the other two sides.');
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
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Lengths must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Lengths must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
