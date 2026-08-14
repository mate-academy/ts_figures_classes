export type Shape = 'triangle' | 'circle' | 'rectangle';

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: Color;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    const longestSide: number = Math.max(a, b, c);
    const otherSides: number = a + b + c - longestSide;

    if (longestSide >= otherSides) {
      throw new Error("These sides can't form a triangle");
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }

    this.color = color;
    this.radius = radius;
  }

  public getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: Color;

  private width: number;

  private height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
