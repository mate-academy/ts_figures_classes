const ERROR_ANY_SIDE_BELOW_OR_IS_ZERO = 'Error, any side length is <= 0';
const ERROR_CANNOT_FORM_TRIANGLE
  = 'Error, the longest side of a triangle is >= than a sum of two others';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape :Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERROR_ANY_SIDE_BELOW_OR_IS_ZERO);
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error(ERROR_CANNOT_FORM_TRIANGLE);
    }
  }

  public getArea() :number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape :Shape = Shape.Circle;

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error(ERROR_CANNOT_FORM_TRIANGLE);
    }
  }

  public getArea() :number {
    const area = Math.PI * this.a ** 2;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle {
  public shape :Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(ERROR_ANY_SIDE_BELOW_OR_IS_ZERO);
    }
  }

  public getArea() :number {
    return this.a * this.b;
  }
}

export function getInfo(
  figure :Triangle | Circle | Rectangle,
) :string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
