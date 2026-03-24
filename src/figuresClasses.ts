type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be positive');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  // p = P / 2;
  // P = a + b + c
  // S = sqrt(p * (p - a) * (p - b) * (p - c))
  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return parseFloat(S.toFixed(2));
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be positive');
    }
  }

  // S = pi * r^2
  getArea(): number {
    const S = Math.PI * this.radius ** 2;

    return parseFloat(S.toFixed(3).slice(0, -1));
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be positive');
    }
  }

  // S = a * b
  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
