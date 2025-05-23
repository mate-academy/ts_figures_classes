type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

interface Figure {
  shape: Shape;
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
    const everySideIsGreaterThan0 = a > 0 && b > 0 && c > 0;
    const longestSide = Math.max(a, b, c);
    const triangleExists = longestSide < a + b + c - longestSide;

    if (!everySideIsGreaterThan0 || !triangleExists) {
      throw new Error(`Sides ${a} ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`This circle does not exist`);
    }
  }

  getArea(): number {
    const S = Math.PI * this.radius ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Sides ${a} and ${b} can't form a rectangle`);
    }
  }

  getArea(): number {
    const S = this.a * this.b;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
