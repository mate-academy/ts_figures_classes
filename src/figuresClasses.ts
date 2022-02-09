export interface Figure {
  shape: string,
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle implements Figure {
  public shape = 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math
      .round(Math
        .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides must be positive value');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('It\'s not a triangle');
    }
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  getArea(): number {
    return Math.trunc((Math.PI * this.r ** 2) * 100) / 100;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('sides must be positive value');
    }
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  getArea(): number {
    return this.length * this.longest;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public length: number,
    public longest: number,
  ) {
    if (length <= 0 || longest <= 0) {
      throw new Error('sides must be positive value');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
