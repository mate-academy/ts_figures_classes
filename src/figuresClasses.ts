type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('wrong value');
    }

    const max = Math.max(this.a, this.b, this.c);
    const otherSides = this.a + this.b + this.c - max;

    if (max >= otherSides) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.color = color;
  }

  public shape: Shape = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('wrong value');
    }
    this.color = color;
  }

  public shape: Shape = 'circle';

  getArea(): number {
    return Math.floor(Math.PI * this.a * this.a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('wrong value');
    }
    this.color = color;
  }

  public shape: Shape = 'rectangle';

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
