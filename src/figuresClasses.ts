type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Shape = 'triangle',
  ) {
    this.validateTriangle();
  }

  private validateTriangle(): void {
    const sidesOfTriangleArr = [this.sideA, this.sideB, this.sideC]
      .sort((a: number, b: number) => a - b);

    if (Math.min(...sidesOfTriangleArr) <= 0) {
      throw new Error('All sides have to be positive numbers');
    }

    if (sidesOfTriangleArr[2]
      >= (sidesOfTriangleArr[0] + sidesOfTriangleArr[1])) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    const perimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math
      .sqrt(
        perimeter
        * (perimeter - this.sideA)
        * (perimeter - this.sideB)
        * (perimeter - this.sideC),
      );

    return Math.floor((area) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    this.validateRadius();
  }

  private validateRadius(): void {
    if (this.radius < 0) {
      throw new Error('Radius have to be positive number');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    this.validateRectangle();
  }

  private validateRectangle(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('All sides have to be positive numbers');
    }
  }

  getArea():number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
