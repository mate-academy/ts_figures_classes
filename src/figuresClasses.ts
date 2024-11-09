export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {
    this.shape = 'triangle';

    const ab = a + b;
    const bc = b + c;
    const ac = a + c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    if (a >= bc || b >= ac || c >= ab) {
      throw new Error('The provided sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public r: number,
    public shape: 'circle',
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('this is a dot');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.r, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public shape: 'rectangle',
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
