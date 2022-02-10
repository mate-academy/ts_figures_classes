type Color = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shapes.triangle;

    if (a + b <= c
        || a + c <= b
        || b + c <= a
        || [a, b, c].some((side: number) => side <= 0)) {
      throw new Error(
        `Entered values don't belong to figure type of ${this.shape}`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math
      .round(Math
        .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shapes.circle;

    if (radius <= 0) {
      throw new Error(
        `Entered values don't belong to figure type of ${this.shape}`,
      );
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Color,
    public width: number,
    public hight: number,
  ) {
    this.shape = Shapes.rectangle;

    if ([width, hight].some((side: number) => side <= 0)) {
      throw new Error(
        `Entered values don't belong to figure type of ${this.shape}`,
      );
    }
  }

  getArea(): number {
    return Math.round(this.width * this.hight * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape}`
  + ` - ${figure.getArea()}`;
}
