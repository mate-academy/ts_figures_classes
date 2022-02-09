
export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: string;
  radius?: number;
  width?: number;
  height?: number;
  getArea: () => number;
}

export class Triangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a >= this.b + this.c
      || this.c >= this.a + this.b
      || this.b >= this.c + this.a
    ) {
      throw new Error('please, put correct data');
    }

    if (this.a === 0 || this.b === 0 || this.c === 0) {
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
  color: 'red' | 'green' | 'blue';

  shape: string;

  radius: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;
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
  color: 'red' | 'green' | 'blue';

  shape: string;

  a: number;

  b: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
  ) {
    this.a = a;
    this.b = b;
    this.shape = 'rectangle';
    this.color = color;

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
