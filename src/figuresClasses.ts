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
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a < 1 || b < 1 || c < 1) {
      throw new Error('ectangle side lengths must be greater than zero.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The given sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a < 1) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a < 1 || b < 1) {
      throw new Error('Circle radius must be greater than zero');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
