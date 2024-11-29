'use strict';

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public longest: number,
    public sum: number,
  ) {
    this.longest = Math.max(this.a, this.b, this.c);
    this.sum = this.a + this.b + this.c;

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.longest >= this.sum - this.longest
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area =
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area: number = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
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
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area: number = Math.round(this.width * this.height * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const areaOfFigure = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${areaOfFigure}`;
}
