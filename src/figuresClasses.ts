export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'],
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || (a + b) >= c
      || (a + c) >= b
      || (c + b) >= a) {
      throw Error();
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    )
      .toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Figure['color'],
    public r: number,
    public shape: Figure['shape'],
  ) {
    if (r <= 0) {
      throw Error();
    }
    this.shape = 'circle';
  }

  getArea(): number {
    return Number((3.14 * this.r * this.r).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public h: number,
    public l: number,
    public shape: Figure['shape'],
  ) {
    if (h <= 0 || l <= 0) {
      throw Error();
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Number((this.h * this.l).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
