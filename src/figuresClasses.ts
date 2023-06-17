export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export type ColorType = 'red' | 'green' | 'blue';

export class Triangle {
  shape: 'triangle';

  a: number;

  b: number;

  c: number;

  color: string;

  constructor(
    color: ColorType,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides should be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'Longest side of a triangle should'
        + ' be less than the sum of the other two sides',
      );
    }

    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: 'circle';

  color: string;

  a: number;

  constructor(
    color: ColorType,
    a: number,
  ) {
    if (a <= 0) {
      throw new Error('Radius should be greater than 0');
    }

    this.shape = 'circle';
    this.color = color;
    this.a = a;
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: 'rectangle';

  color: string;

  a: number;

  b: number;

  constructor(
    color: ColorType,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Length and width should be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
