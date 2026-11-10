type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: string;
  shape: Shape;

  getInfo(): string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides cannot be zero or negative');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Triangle sides do not satisfy the triangle inequality');
    }

    this.shape = 'triangle';
  }

  getInfo(): string {
    return `A ${this.color} triangle - ${this.getArea()}`;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius cannot be zero or negative');
    }

    this.shape = 'circle';
  }

  getInfo(): string {
    return `A ${this.color} circle - ${this.getArea()}`;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions cannot be zero or negative');
    }

    this.shape = 'rectangle';
  }

  getInfo(): string {
    return `A ${this.color} rectangle - ${this.getArea()}`;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return figure.getInfo();
}
