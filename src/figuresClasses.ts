type FigureColor = 'red' | 'green' | 'blue';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide: number = Math.max(a, b, c);

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || longestSide >= (a + b + c - longestSide)
    ) {
      throw new Error('no valid param');
    }

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const sqrt: number = Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('no valid param');
    }

    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('no valid param');
    }

    this.shape = 'rectangle';
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
