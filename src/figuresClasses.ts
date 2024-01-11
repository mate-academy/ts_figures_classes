type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const SIDE_LESS_THAN_ZERO_ERROR_MESSAGE: string
  = 'Each side should be greater than 0';
const TRIANGLE_NOT_VALID_ERROR_MESSAGE: string
  = 'Sum of two small sides must be greater or equal to the biggest side';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export function isAllGreaterThan0(...args: number[]): boolean {
  // eslint-disable-next-line no-restricted-syntax
  for (const number of args) {
    if (number <= 0) {
      return false;
    }
  }

  return true;
}

export function isTriangleValid(a: number, b: number, c: number): boolean {
  const maxSide: number
    = [a, b, c].sort((n1: number, n2: number) => n1 - n2).pop() || 0;

  return a + b + c - 2 * maxSide > 0;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isAllGreaterThan0(a, b, c)) {
      throw new Error(SIDE_LESS_THAN_ZERO_ERROR_MESSAGE);
    }

    if (!isTriangleValid(a, b, c)) {
      throw new Error(TRIANGLE_NOT_VALID_ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor((
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (!isAllGreaterThan0(a)) {
      throw new Error(SIDE_LESS_THAN_ZERO_ERROR_MESSAGE);
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.a ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (!isAllGreaterThan0(a, b)) {
      throw new Error(SIDE_LESS_THAN_ZERO_ERROR_MESSAGE);
    }
  }

  getArea(): number {
    return this.b * this.a;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
