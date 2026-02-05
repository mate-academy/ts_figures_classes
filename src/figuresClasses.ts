/* eslint-disable max-len */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0) {
      throw new Error('the length of side a is 0 or negative');
    }

    if (b <= 0) {
      throw new Error('the length of side b is 0 or negative');
    }

    if (c <= 0) {
      throw new Error('the length of side c is 0 or negative');
    }

    const maximal = Math.max(a, b, c);

    if (maximal >= a + b + c - maximal) {
      throw new Error(
        'The provided sides cannot form a valid triangle because they do not satisfy the triangle inequality theorem',
      );
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public r: number,
    public shape: Shape = 'circle',
  ) {
    if (r <= 0) {
      throw new Error('the length of radius is 0 or negative');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (a <= 0) {
      throw new Error('the length of side a is 0 or negative');
    }

    if (b <= 0) {
      throw new Error('the length of side b is 0 or negative');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
