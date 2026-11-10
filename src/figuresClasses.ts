export interface Figure {
  color: string;
  shape: number[];

  getInfo(): string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: number[];

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides cannot be zero or negative');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Triangle sides do not satisfy the triangle inequality');
    }

    this.color = color;
    this.shape = [a, b, c];
  }

  getInfo(): string {
    return `A ${this.color} triangle - ${this.getArea()}`;
  }

  getArea(): number {
    const s = (this.shape[0] + this.shape[1] + this.shape[2]) / 2;

    return (
      Math.floor(
        Math.sqrt(
          s * (s - this.shape[0]) * (s - this.shape[1]) * (s - this.shape[2]),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  color: string;

  shape: number[];

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius cannot be zero or negative');
    }

    this.color = color;
    this.shape = [radius];
  }

  getInfo(): string {
    return `A ${this.color} circle - ${this.getArea()}`;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.shape[0] ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;

  shape: number[];

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions cannot be zero or negative');
    }

    this.color = color;
    this.shape = [width, height];
  }

  getInfo(): string {
    return `A ${this.color} rectangle - ${this.getArea()}`;
  }

  getArea(): number {
    return this.shape[0] * this.shape[1];
  }
}

export function getInfo(figure: Figure): string {
  return figure.getInfo();
}
