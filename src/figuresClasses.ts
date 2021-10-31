type GeometricalShape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: GeometricalShape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: GeometricalShape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('Sides of given lengths can\'t form a triangle');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return Math.floor(100 * triangleArea) / 100;
  }
}

export class Circle {
  public shape: GeometricalShape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius ** 2);

    return Math.floor(100 * circleArea) / 100;
  }
}

export class Rectangle {
  public shape: GeometricalShape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }
  }

  getArea(): number {
    const rectangleArea = this.height * this.width;

    return Math.floor(100 * rectangleArea) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
