export type Shape = 'triangle' | 'circle' | 'rectangle';

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive');
    }

    const longestSide: number = Math.max(a, b, c);
    const otherSidesSum: number = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be positive');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
