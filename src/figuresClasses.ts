type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: string;
  color: Color;
  getArea: () => number;
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
      throw new Error('Invalid arguments');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("These arguments can't form triangle");
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = Shape.circle;

  constructor(public color: Color, private r: number) {
    if (r <= 0) {
      throw new Error('Invalid arguments');
    }
  }

  getArea(): number {
    const { r } = this;

    return Math.round(Math.floor(Math.PI * (r * r) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = Shape.rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Height or width is negative');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.round(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
