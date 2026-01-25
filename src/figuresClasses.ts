type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('A or B or C <= 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const fixed = Math.floor(area * 100) / 100;

    return fixed;
  }
}

export class Circle implements Figure {
  public color: Color;

  public shape: Shape = 'circle';

  public r: number;

  constructor(color: Color, r: number) {
    this.color = color;
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('R <= 0');
    }

    this.r = r;
  }

  getArea(): number {
    const s = Math.PI * this.r * this.r;
    const fixed = Math.floor(s * 100) / 100;

    return fixed;
  }
}

export class Rectangle implements Figure {
  public color: Color;

  public shape: Shape = 'rectangle';

  public w: number;

  public h: number;

  constructor(color: Color, w: number, h: number) {
    this.shape = 'rectangle';
    this.color = color;

    if (w <= 0 || h <= 0) {
      throw new Error('R <= 0');
    }

    this.w = w;
    this.h = h;
  }

  getArea(): number {
    const s = this.h * this.w;
    const fixed = Math.floor(s * 100) / 100;

    return fixed;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
