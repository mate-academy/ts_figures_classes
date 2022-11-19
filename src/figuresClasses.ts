type Color = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  color: Color,
  shape: Shapes,
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shapes.triangle;

  a: number;
  b: number;
  c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = Shapes.triangle;

    if (a > 0 && b > 0 && c > 0) {
      const long = Math.max(a, b, c);

      if ((a + b + c - long) > long) {
        this.a = a;
        this.b = b;
        this.c = c;
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const heron = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(heron * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes.circle;

  r: number;

  constructor(
    public color: Color,
    r: number,
  ) {
    this.shape = Shapes.circle;

    if (r > 0) {
      this.r = r;
    } else {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r * this.r) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes.rectangle;

  a: number;
  b: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    this.shape = Shapes.rectangle;

    if (a > 0 && b > 0) {
      this.a = a;
      this.b = b;
    } else {
      throw new Error();
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
