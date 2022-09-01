enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function haveInvalidValue(...args: number[]): boolean {
  return args.some((value) => value <= 0);
}

function rounder(num: number): number {
  return Math.floor(100 * num) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide: number = Math.max(a, b, c);
    const invalidSidesRatio: boolean = maxSide >= a + b + c - maxSide;

    if (haveInvalidValue(a, b, c) || invalidSidesRatio) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return rounder(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (haveInvalidValue(radius)) {
      throw new Error('radius should be greater than 0');
    }
  }

  getArea(): number {
    return rounder(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (haveInvalidValue(width, height)) {
      throw new Error('width and height should be greater than 0');
    }
  }

  getArea(): number {
    return rounder(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
