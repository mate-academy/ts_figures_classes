type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
  color: Color;

  sideA: number;
  sideB: number;
  sideC: number;

  constructor(color: Color, sideA: number, sideB: number, sideC: number) {
    if (
      sideA <= 0
      || sideB <= 0
      || sideC <= 0
      || sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA
    ) {
      throw new Error('Sides cannot form a triangle');
    }

    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      semiPerimeter * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  color: Color;

  width: number;
  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
