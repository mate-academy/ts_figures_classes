enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const list = [a, b, c].sort((x, y) => y - x);

    switch (true) {
      case a <= 0:
      case b <= 0:
      case c <= 0:
      case list[0] >= list[1] + list[2]:
        throw new Error('your error message');
      default:
        break;
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

    return Number(S.toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return +(Math.PI * this.radius ** 2).toFixed(3).slice(0, -1);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    switch (true) {
      case a <= 0:
      case b <= 0:
        throw new Error('your error message');
      default:
        break;
    }
  }

  getArea(): number {
    return +(this.a * this.b).toFixed(3).slice(0, -1);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
