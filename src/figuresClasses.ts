type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function calculateFloor(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  sideNegative: boolean = this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0;

  sideOfTriangle: boolean = this.sideA >= this.sideB + this.sideC
    || this.sideB >= this.sideC + this.sideA
    || this.sideC >= this.sideB + this.sideA;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideNegative) {
      throw new Error('Every side must be over 0');
    }

    // I can't use this.sideOfTriangle from line 25 in check below
    // because of error in tests

    if (sideA >= sideB + sideC
      || sideB >= sideC + sideA
      || sideC >= sideB + sideA) {
      throw new Error('Side can\'t be more or equal than sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.sideA + this.sideB + this.sideC) / 2;

    const squareTriangle = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
    );

    return calculateFloor(squareTriangle);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of the circle can\'t be below or equal zero');
    }
  }

  getArea(): number {
    const squareCircle = this.radius ** 2 * Math.PI;

    return calculateFloor(squareCircle);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Every side must be greater 0');
    }
  }

  getArea(): number {
    const squareRectangle: number = this.sideA * this.sideB;

    return calculateFloor(squareRectangle);
  }
}

// Also I can't destructure figure in {color, shape, getArea}
// because getArea can't read property 'radius' or 'sideA' of undefined

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
