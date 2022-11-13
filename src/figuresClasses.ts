type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0
        || sideB <= 0
        || sideC <= 0) {
      throw new Error('Every side must be over 0');
    }

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

    return Math.floor(squareTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

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

    return Math.floor(squareCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

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
    return Math.floor(this.sideA * this.sideB * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
