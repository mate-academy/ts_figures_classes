export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export type TColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: TColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: TColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not valid data, your sides must have positive value');
    }

    if (a + b <= c
      || b + c <= a
      || a + c <= b) {
      throw new Error('Not valid data, your param of sides are not right');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: TColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const r = Math.PI * (this.radius * this.radius);

    return Math.floor(r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: TColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter a valid data');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.round(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
