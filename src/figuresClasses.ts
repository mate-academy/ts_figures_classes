const ERROR_ANY_SIDE_BELOW_OR_IS_ZERO
  = 'Error, one of the sides (or radius) is less than or equal to zero';
const ERROR_CANNOT_FORM_TRIANGLE
  = 'Error, the longest side of a triangle is >= than a sum of two others';

const roundArea = (area: number) :number => Math.trunc(area * 100) / 100;

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

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

  public getArea= (): number => {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return roundArea(area);
  };
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_ANY_SIDE_BELOW_OR_IS_ZERO);
    }
  }

  public getArea= (): number => {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  };
}

export class Rectangle {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(ERROR_ANY_SIDE_BELOW_OR_IS_ZERO);
    }
  }

  public getArea = (): number => {
    return this.a * this.b;
  };
}

export function getInfo({
  color,
  shape,
  getArea,
}: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
