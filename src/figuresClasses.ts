type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a >= this.b + this.c
      || this.c >= this.a + this.b
      || this.b >= this.c + this.a
    ) {
      throw new Error('please, put correct data');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('please, put correct data');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('need valid radius value');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (this.a < 0 || this.b < 0 || this.a - this.b === 0) {
      throw new Error('not valid sides values :)');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
