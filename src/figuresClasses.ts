
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a:number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Not valid value');
    } else if (this.a + this.b <= this.c
        || this.b + this.c <= this.a
        || this.a + this.c <= this.b) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;

    if (this.radius <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    return 3.14 * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public h: number,
    public w: number,
  ) {
    this.shape = Shape.rectangle;

    if (this.h <= 0 || this.w <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    return (this.h * this.w);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
