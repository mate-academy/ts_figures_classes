type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length should be more than 0');
    }

    const longestSide = Math.max(a, b, c);
    const sum = a + b + c;

    if (longestSide >= sum - longestSide) {
      throw Error('The side cannot be more than a sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius should be more than 0');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Side length should be more than 0');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(_figure: Figure): string {
  return `A ${_figure.color} ${_figure.shape} - ${_figure.getArea()}`;
}
