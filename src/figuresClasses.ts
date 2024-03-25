type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: object;
}

export class Triangle implements Figure {
  public shape: Shape = `triangle`;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const max = Math.max(a, b, c);

    if (max >= a + b + c - max) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;
    const s =
      Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;

    return s;
  }
}

export class Circle implements Figure {
  public shape: Shape = `circle`;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { radius } = this;

    const s = Math.floor(Math.PI * radius * radius * 100) / 100;

    return s;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const s = Math.floor(width * height * 100) / 100;

    return +s;
  }
}

export function getInfo(figure: Figure): string {
  const a = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${a}`;
}
