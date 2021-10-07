
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export class Triangle implements Figure {
  public shape = Shapes.triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shapes.circle;

  constructor(
    public color: Color,
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const { r } = this;

    return Math.floor(Math.PI * r * r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.rectangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const { a, b } = this;

    return +(a * b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
