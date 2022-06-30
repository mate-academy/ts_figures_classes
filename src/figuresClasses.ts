enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
type Color = 'red' | ' green' | ' blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c)
    ) {
      throw new Error('The side of the triangle cannot be less than 0');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c))).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle cannot be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,

  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('The side of the rectangle cannot be less than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
