type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any length must not be less than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The longest side of a triangle is greater than a sum of two others',
      );
    }

    this.color = color;

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const perimeter = this.a + this.b + this.c;
    const semiperimeter = perimeter / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Any length must not be less than 0');
    }

    this.color = color;

    this.radius = radius;
  }

  getArea(): number {
    const area = this.radius ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  a: number;

  b: number;

  constructor(color: Color, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Any length must not be less than 0');
    }

    this.color = color;

    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
