type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = `triangle`;

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides must be greater than 0');
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const sortedSides = [a, b, c].sort((a, b) => a - b);

    const min = sortedSides[0];
    const mid = sortedSides[1];
    const max = sortedSides[2];

    if (min + mid <= max) {
      throw new Error('not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = `circle`;

  color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = `rectangle`;

  color: Color;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('sides must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
