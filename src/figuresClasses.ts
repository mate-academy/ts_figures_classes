type Color = `red` | `green` | `blue`;

enum Shape {
  triangle = `triangle`,
  circle = `circle`,
  rectangle = `rectangle`,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c - max;

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const { radius } = this;
    const s = Math.PI * Math.pow(radius, 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const { a, b } = this;
    const s = a * b;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  const s = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${s}`;
}
