export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Color,

    public a: number,

    public b: number,

    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error invalid input');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Error invalid input');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Color,

    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error radius <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Color,

    public width: number,

    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error invalid input');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
