export interface Figure {
  shape: string,
  color: string,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape = 'triangle';

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
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Size must be a positive number!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid sizes!');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    const s2 = (s * (s - this.a) * (s - this.b) * (s - this.c));

    const area = (Math.sqrt(s2));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(
    color: string,
    radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be a positive number!');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Size must be a positive number!');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
