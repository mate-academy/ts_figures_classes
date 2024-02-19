type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function round(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('accept only positive numbers');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b + c - longestSide) {
      throw new Error('one of the sides is too big, cannot build a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const sP = (a + b + c) / 2;

    const area = Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c));

    return round(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('accept only positive numbers');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return round(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('accept only positive numbers');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return round(area);
  }
}

export function getInfo(figure): string {
  return typeof figure;
export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
