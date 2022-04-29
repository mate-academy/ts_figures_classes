export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('There is missing dimention.');
    }

    if (
      a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)
    ) {
      throw new Error('There is now triangle with such dimentions.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea(): number {
    const result = this.a * this.a * Math.PI;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
