export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide: number = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || maxSide >= a + b + c - maxSide) {
      throw new Error('your error message');
    }
  }

  readonly shape: string = 'triangle';

  getArea(): number {
    const { a, b, c } = this;

    const p: number = (a + b + c) / 2;

    return Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  readonly shape: string = 'circle';

  getArea(): number {
    const { radius } = this;

    return Math.floor(Math.PI * radius * radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  readonly shape: string = 'rectangle';

  getArea(): number {
    const { width, height } = this;

    return Math.floor(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
