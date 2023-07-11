type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rect = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const allSize: number[] = [a, b, c];
    const biggestSide: number = Math.max(...allSize);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Biggest side - ${biggestSide}; is biggest or equal of two others`,
      );
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`One if side is zero or below: ${a}, ${b}, ${c}`);
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error(`Incorrect size: ${radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rect;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error(`Invalid height: ${this.a} or width: ${this.b}`);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
