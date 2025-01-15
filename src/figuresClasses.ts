/* eslint-disable @typescript-eslint/lines-between-class-members */
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';
  color: 'red' | 'green' | 'blue';
  a: number;
  b: number;
  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be greater than zero');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'The longest side must be less than the sum of two shorter sides.',
      );
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  //  Heron formula
  //  Area = sqrt(s(s-a)(s-b)(s-c))

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';
  color: 'red' | 'green' | 'blue';
  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';
  color: 'red' | 'green' | 'blue';
  length: number;
  width: number;

  constructor(color: 'red' | 'green' | 'blue', length: number, width: number) {
    if (length <= 0 || width <= 0) {
      throw new Error(
        'Length and width of rectangle must be greater than zero.',
      );
    }
    this.color = color;
    this.length = length;
    this.width = width;
  }

  getArea(): number {
    const area = this.length * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
