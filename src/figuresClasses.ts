type Color = 'red' | 'green' | 'blue';

export enum GeometricFigure {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: GeometricFigure;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: GeometricFigure = GeometricFigure.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides values should be positive number');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('A triangle with such side lengths is impossible');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
     * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: GeometricFigure = GeometricFigure.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive number');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: GeometricFigure = GeometricFigure.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides values should be positive number');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.round(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
