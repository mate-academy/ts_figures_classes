type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape?: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const shortestSide = Math.min(a, b, c);
    const middleSide = a + b + c - longestSide - shortestSide;

    if (
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      longestSide >= shortestSide + middleSide
    ) {
      throw new Error("can't create a figure");
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const P = a + b + c;
    const p = P / 2;
    const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return +S.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error("can't create a figure");
    }
  }

  getArea(): number {
    const { radius } = this;
    const S = Math.PI * radius ** 2;

    return +Math.floor(S * 100) / 100;
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
      throw new Error("can't create a figure");
    }
  }

  getArea(): number {
    const { width, height } = this;
    const S = width * height;

    return +S.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
