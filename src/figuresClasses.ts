// eslint-disable-next-line

export interface Figure {
  shape :string;
  color: string;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'blue' | 'green' | 'red', a: number, b: number, c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length must be a positive number larger than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Invalid triangle'
        + 'any side must be smaller than the sum of the other two.',
      );
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      perimeter
      * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: 'blue' | 'green' | 'red', radius: number) {
    if (radius <= 0) {
      throw new Error('Length must be a positive number larger than 0.');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: 'blue' | 'green' | 'red', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length must be a positive number larger than 0.');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
