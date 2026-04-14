type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const round = (value: number): number => Math.floor(value * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return round(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return round(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
