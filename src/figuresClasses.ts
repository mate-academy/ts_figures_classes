type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'blue' | 'green';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 && b <= 0 && c <= 0)
      || (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c))) {
      throw new Error('not a triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(s.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('not a circle');
    }
  }

  getArea(): number {
    const s: number = Math.PI * (this.r ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('not a rectangle');
    }
  }

  getArea(): number {
    const s: number = this.a * this.b;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
