enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function sizeChecker(...sides: number[]): Boolean {
  return sides.some((side: number) => side <= 0);
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sizeChecker(sideA, sideB, sideC)) {
      throw new Error('All sides must be > 0');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB) {
      throw new Error('One side is longer than sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return +Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA)
    * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC)).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public circleRadius: number,
  ) {
    if (this.circleRadius <= 0) {
      throw new Error('Value should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.circleRadius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public rectangleWidth: number,
    public rectangleHeight: number,
  ) {
    if (sizeChecker(rectangleHeight, rectangleWidth)) {
      throw new Error('Width and hight must be >= 0');
    }
  }

  getArea(): number {
    return +(this.rectangleWidth * this.rectangleHeight).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
