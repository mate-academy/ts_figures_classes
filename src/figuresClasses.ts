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

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || a <= 0) {
      throw new Error('Length of side should be greater then zero');
    }

    if (a >= c + b || b >= a + c || c >= a + b) {
      throw new Error('Longest side is greater than other two');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const sqrt = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));

    return Math.trunc(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length of radius should be greater then zero');
    }
  }

  getArea(): number {
    return Math.trunc((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of side should be greater then zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
