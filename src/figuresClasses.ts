export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Resulting value shold be even number');
    }

    if (a >= b + c
    || b >= a + c
    || c >= a + b) {
      throw new Error('Resulting value shold be even number');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(
    color: string,
    radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Resulting value shold be even number');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  heigh: number;

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.heigh = height;

    if (this.width <= 0 || this.heigh <= 0) {
      throw new Error('Resulting value shold be even number');
    }
  }

  getArea():number {
    return (this.width * this.heigh);
  }
}

export function getInfo(figure: Circle | Rectangle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
