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
    if (a <= 0 || b <= 0 || c <= 0 || (a + b) === c) {
      throw Error();
    }
    this.shape = 'triangle';
    this.getArea();
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
    public a: number,
    public shape: Figure['shape'],
  ) {
    if (a <= 0) {
      throw Error();
    }
    this.shape = 'circle';
    this.getArea();
  }

  getArea(): number {
    return Number((3.14 * this.a * this.a).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public shape: Figure['shape'],
  ) {
    if (a <= 0 || b <= 0) {
      throw Error();
    }
    this.shape = 'rectangle';
    this.getArea();
  }

  getArea(): number {
    return Number((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
