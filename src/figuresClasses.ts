'use strict';

type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

const ROUND_VALUE: number = 100;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Shape cannot be formed with zero or negative length sides',
      );
    }

    const ascSides = [a, b, c].sort(
      (first: number, second: number) => first - second,
    );

    if (ascSides[2] >= ascSides[1] + ascSides[0]) {
      throw new Error(
        `Triangle cannot be formed with sides of length ${a}, ${b} and ${c}`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.trunc(result * ROUND_VALUE) / ROUND_VALUE;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error(
        'Circle cannot be formed with zero or negative length radius',
      );
    }
  }

  getArea(): number {
    const result = this.r ** 2 * Math.PI;

    return Math.trunc(result * ROUND_VALUE) / ROUND_VALUE;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Shape cannot be formed with zero or negative length sides',
      );
    }
  }

  getArea(): number {
    const result = this.width * this.height;

    return Math.trunc(result * ROUND_VALUE) / ROUND_VALUE;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
