type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
    public shape: Shape = 'triangle',
  ) {
    const longest: number = Math.max(a, b, c);
    const another: number[] = [a, b, c].filter((side) => side !== longest);
    const anotherSum = another.reduce((sum, current) => sum + current, 0);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle requires sides length > 0');
    } else if (longest >= anotherSum) {
      throw new Error('Triangle has too long side');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = (a + b + c) / 2;
    const result: number = s * (s - a) * (s - b) * (s - c);
    const res: number = Math.sqrt(result);

    if (res % 2 === 0) {
      return res;
    } else {
      return Math.floor(res * 100) / 100;
    }
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    protected r: number,
    public shape: Shape = 'circle',
  ) {
    if (r <= 0) {
      throw new Error('Impossible to create circle');
    }

    this.r = r;
  }

  getArea(): number {
    const r = this.r;
    const res: number = Math.PI * r ** 2;

    if (res % 2 === 0) {
      return res;
    } else {
      return Math.floor(res * 100) / 100;
    }
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Rectangle requires sides length > 0');
    }

    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const { a, b } = this;
    const res: number = a * b;

    if (res % 2 === 0) {
      return res;
    } else {
      return Math.floor(res * 100) / 100;
    }
  }
}

export function getInfo(figure: Figure): string {
  const result: string = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
