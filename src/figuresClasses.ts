type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

function isTriangle(a: number, b: number, c: number): boolean {
  return (a + b <= c) || (c + b <= a) || (a + c <= b);
}

function isAnyNumberLessThanZero(...numbers: number[]): boolean {
  return numbers
    .map((number) => number <= 0)
    .includes(true);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (isAnyNumberLessThanZero(a, b, c)) {
      throw new Error('All sides must be greater than 0');
    }

    if ((isTriangle(a, b, c))) {
      throw new Error('Sum of any two sides must be greater than the third');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.trunc(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    if (isAnyNumberLessThanZero(radius)) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  a: number;

  b: number;

  constructor(
    color: Color,
    a: number,
    b: number,
  ) {
    if (isAnyNumberLessThanZero(a, b)) {
      throw new Error('All sides must be greater than 0');
    }

    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape}`
    + ` - ${figure.getArea()}`;
}
