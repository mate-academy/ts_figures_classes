export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error(
        'Every side of the triangle cannot be 0 or a negative number',
      );
    }

    if (
      this.sideA + this.sideB <= this.sideC
      || this.sideA + this.sideC <= this.sideB
      || this.sideB + this.sideC <= this.sideA
    ) {
      throw new Error(
        'The longest side of triangle should be less than a sum of two others',
      );
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

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be a negative number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Height and width cannot be 0 or a negative number');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
