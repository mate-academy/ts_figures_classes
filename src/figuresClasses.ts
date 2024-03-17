/* eslint-disable @typescript-eslint/lines-between-class-members */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideC + sideB <= sideA
    ) {
      throw new Error('Incorrect input data. Unable to create a triangle');
    }
  }

  getArea(): number {
    const halfMeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      halfMeter *
        (halfMeter - this.sideA) *
        (halfMeter - this.sideB) *
        (halfMeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
