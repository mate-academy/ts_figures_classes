type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public readonly color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const fixed = Math.floor(area * 100) / 100;

    return fixed;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public readonly color: Color,
    public readonly r: number,
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('Radius of circle must be positive number.');
    }
  }

  getArea(): number {
    const s = Math.PI * this.r * this.r;
    const fixed = Math.floor(s * 100) / 100;

    return fixed;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,
    public readonly w: number,
    public readonly h: number,
  ) {
    this.shape = 'rectangle';

    if (w <= 0 || h <= 0) {
      throw new Error('All rectangle sides must be positive numbers.');
    }
  }

  getArea(): number {
    const s = this.h * this.w;
    const fixed = Math.floor(s * 100) / 100;

    return fixed;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
