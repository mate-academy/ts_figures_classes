export interface Figure {
  color: string;
  shape: string;
  getArea(): string | number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('throws an error');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `throws an error: sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): string | number {
    const s = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): string | number {
    const result = this.radius ** 2 * Math.PI;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): string | number {
    const result = this.width * this.height;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
