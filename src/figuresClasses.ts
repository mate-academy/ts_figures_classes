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

export function checkLength(...args: number[]): boolean {
  return args.some((value) => value <= 0);
}

export function rounder(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkLength(this.a, this.b, this.c)) {
      throw new Error('Invalid sides length.');
    }

    const largestSide: number = Math.max(this.a, this.b, this.c);

    if ((this.a + this.b + this.c - largestSide) <= largestSide) {
      throw new Error('Invalid sizes length.');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return rounder(Math.sqrt(
      semiPerimeter
       * (semiPerimeter - this.a)
       * (semiPerimeter - this.b)
       * (semiPerimeter - this.c),
    ));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkLength(this.radius)) {
      throw new Error('Invalid radius length.');
    }
  }

  getArea(): number {
    return rounder(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (checkLength(this.heigth, this.width)) {
      throw new Error('Rectangle sides must be greater than 0.');
    }
  }

  getArea():number {
    return rounder(this.heigth * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
