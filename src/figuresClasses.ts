type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Colors
  shape: Shapes
  getArea: () => {}
}

const rounded = (number: number): number => {
  return Math.floor(number * 100) / 100;
};

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side cannot be <= 0');
    }

    const longestSide = Math.max(a, b, c);
    const oppositeSides = (a + b + c) - longestSide;

    if (longestSide >= oppositeSides) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return rounded(area);
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public a: number,
  ) {
    this.a = a;

    if (this.a <= 0) {
      throw new Error('side cannot be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.a * this.a;

    return rounded(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    this.a = a;
    this.b = b;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('side cannot be <= 0');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return rounded(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
