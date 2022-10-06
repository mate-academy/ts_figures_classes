export interface Figure {
  shape: string,
  color: string,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || (this.a - this.b - this.c) >= 0
      || (this.b - this.a - this.c) >= 0
      || (this.c - this.b - this.a) >= 0) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a * this.a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
