enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error('It seems to be an error');
    }
  }

  public shape = Shape.triangle;

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const result: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public a: number,
  ) {
    this.a = a;

    if (a <= 0) {
      throw new Error('It seems to be an error');
    }
  }

  public shape = Shape.circle;

  getArea(): number {
    const result = this.a * this.a * Math.PI;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.a = a;
    this.b = b;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('It seems to be an error');
    }
  }

  public shape = Shape.rectangle;

  getArea(): number {
    const result = (this.a * this.b);

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
