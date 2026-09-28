export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  private s: number;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      a > 0 &&
      b > 0 &&
      c > 0 &&
      Math.max(a, b, c) < a + b + c - Math.max(a, b, c)
    ) {
      this.s = (a + b + c) / 2;
    } else {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const area = Math.sqrt(
      this.s * (this.s - this.a) * (this.s - this.b) * (this.s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const result = Math.PI * this.radius * this.radius;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;
    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
