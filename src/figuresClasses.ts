export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape = Shape.Triangle,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be more than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side should be less than sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape = Shape.Circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.Rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be more than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
