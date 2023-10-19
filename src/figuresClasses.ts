export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'green' | 'red' | 'blue';

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side length can\'t be less than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The side length is incorrect');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.floor(
      (Math.sqrt(
        perimeter
        * (perimeter - this.a)
        * (perimeter - this.b)
        * (perimeter - this.c),
      )) * 100,
    ) / 100;

    return square;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Input data is incorrect');
    }
  }

  getArea(): number {
    const square: number = ((this.radius ** 2) * Math.PI);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Input data is incorrect');
    }
  }

  getArea(): number {
    const square: number = this.a * this.b;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
