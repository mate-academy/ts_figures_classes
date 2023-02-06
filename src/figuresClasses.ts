enum FigureShape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  color: FigureColor,
  shape: FigureShape,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureShape.triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Values cannot be <= 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The triangle does not exist');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b)
      * (p - this.c)).toFixed(2);
  }
}

export class Circle {
  shape = FigureShape.circle;

  constructor(
    public color: FigureColor,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Value cannot be <= 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = FigureShape.rectangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Values cannot be <= 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
