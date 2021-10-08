type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea: () => number;
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export class Triangle implements Figure {
  public shape: string = Shape.triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error();
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return Math.round(
      Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = Shape.circle;

  constructor(
    public color: Color,
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const { r } = this;

    return Math.round(Math.floor((Math.PI * (r * r) * 100))) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = Shape.rectangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const { a, b } = this;

    return Math.round(a * b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
