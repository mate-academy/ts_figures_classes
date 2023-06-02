type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  sides: number[];

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0
      || sideB <= 0
      || sideC <= 0) {
      throw new Error('Length of each side should be greater than 0');
    }

    if (sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideA + sideC <= sideA) {
      throw new Error('Entered sides cant from a triangle');
    }

  }

  getArea(): number {
    const [sideA, sideB, sideC] = this.sides;
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(semiPerimeter
      * (semiPerimeter - sideA)
      * (semiPerimeter - sideB)
      * (semiPerimeter - sideC)) * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(
    public color: Color, 
    public radius: number
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }

  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
