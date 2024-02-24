export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundedArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error(
        'One or more sides less or equal to 0, not a triangle',
      );
    }

    if (
      this.sideA + this.sideB <= this.sideC
        || this.sideA + this.sideC <= this.sideB
        || this.sideB + this.sideC <= this.sideA
    ) {
      throw new Error(
        'Sum of two sides must be greater than third side, not a triangle',
      );
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return roundedArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be greater than 0, not a circle');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundedArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'Rectangle width and height must be greater than 0, not a rectangle',
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
