type FigureType = 'circle' | 'rectangle' | 'triangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureType;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureType = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureType = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Invalid circle');
    }
  }

  getArea(): number {
    const result = Math.PI * this.radius ** 2;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureType = 'rectangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;

    if (a <= 0 || b <= 0) {
      throw new Error('Invalid rectangle');
    }
  }

  getArea(): number {
    const result = this.a * this.b;

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  if (figure instanceof Triangle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  if (figure instanceof Circle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  if (figure instanceof Rectangle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  return '';
}
