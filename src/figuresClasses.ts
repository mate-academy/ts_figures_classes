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

const roundArea = (area: number): number => Math.floor(area * 100) / 100;

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('data for area should have positive numbers');
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Wrong sides for a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;
    const area: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(public color: Color, private radius: number) {
    if (this.radius <= 0) {
      throw new Error('data for area should have positive numbers');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return roundArea(area);
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
      throw new Error('data for area should have positive numbers');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
