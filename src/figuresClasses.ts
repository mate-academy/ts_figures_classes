export enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shapes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error();
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  public shape = Shapes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.a * this.b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
