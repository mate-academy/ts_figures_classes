enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0
      || this.sideB <= 0
      || this.sideC <= 0) {
      throw new Error('Triangle side must be greater than 0');
    }

    if (this.sideB + this.sideC <= this.sideA
      || this.sideA + this.sideC <= this.sideB
      || this.sideA + this.sideB <= this.sideC) {
      throw new Error('Invalid triangle');
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
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0) {
      throw new Error('Rectagle sides must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round((this.sideA * this.sideB) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
