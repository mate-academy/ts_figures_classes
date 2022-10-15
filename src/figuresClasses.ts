type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  a?: number,
  b?: number,
  c?: number,
  radius?: number,
  shape: string,
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sideA: number = a;
    const sideB: number = b;
    const sideC: number = c;

    if (sideA <= 0
      || sideB <= 0
      || sideC <= 0
      || sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideB + sideA
    ) {
      throw new Error('Error');
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)) * 100)
      / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public radius: number = 1,
  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    const pi: number = Math.PI;

    return Math.floor((pi * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Error');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: object): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
