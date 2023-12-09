export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Error');
    }
  }

  shape: string;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error(`${radius} <= 0`);
    }
  }

  shape: string;

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }

  shape: string;

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
