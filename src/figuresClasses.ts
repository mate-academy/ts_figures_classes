export enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundeArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be greater than 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('It is not a triangle, a + b <= c');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      perimeter *
        (perimeter - this.a) *
        (perimeter - this.b) *
        (perimeter - this.c),
    );

    return roundeArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundeArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle width and height should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundeArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
