export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide: number = Math.max(this.a, this.b, this.c);

    const sumOfOthers: number = this.a + this.b + this.c - maxSide;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0 || maxSide >= sumOfOthers) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('Circle radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.a, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Rectangle sides must be positive numbers');
    }
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
