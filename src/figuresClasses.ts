// Interface
export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error message');
    }

    if (
      Math.max(this.a, this.b, this.c) >= this.a + this.b ||
      Math.max(this.a, this.b, this.c) >= this.a + this.c ||
      Math.max(this.a, this.b, this.c) >= this.c + this.b
    ) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const squareArea = Math.sqrt(
      perimetr *
        (perimetr - this.a) *
        (perimetr - this.b) *
        (perimetr - this.c),
    );

    return Math.floor(squareArea * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const squareArea = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(squareArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const squareArea = this.width * this.height;

    return Math.floor(squareArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
