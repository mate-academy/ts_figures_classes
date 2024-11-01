type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public a = 1,
    public b = 1,
    public c = 1,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('a length should be > 0');
    }

    const longestSide = Math.max(a, b, c);

    if (
      (longestSide === a && a >= b + c) ||
      (longestSide === b && b >= a + c) ||
      (longestSide === c && c >= a + b)
    ) {
      throw new Error(
        'The longest side of a triangle should be < than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public r = 1,
  ) {
    if (r <= 0) {
      throw new Error('r length should be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.r * this.r * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    public a = 1,
    public b = 1,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('a side length should be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
