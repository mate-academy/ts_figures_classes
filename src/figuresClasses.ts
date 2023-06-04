export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Rectangle = 'rectangle',
  Triangle = 'triangle',
  Circle = 'circle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
        || this.a + this.b <= c
        || this.a + this.c <= this.b
        || this.c + this.b <= this.a) {
      throw new Error('incorect Data');
    }
  }

  getArea(): number {
    const pHalf: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      pHalf * (pHalf - this.a) * (pHalf - this.b) * (pHalf - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius are not positive numbers');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('some sides are not positive numbers');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
