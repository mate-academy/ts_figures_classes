export interface Figure {
  shape: string;
  color: string;
  getArea(
    a?: number,
    b?: number,
    c?: number,
    radius?: number,
    width?: number,
    height?: number,
  ): number;
  getInfo(): string;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a ||
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0
    ) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(square.toFixed(2));
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Your radius is not a positive number!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    let area = 0;

    if (this.width > 0 && this.height > 0) {
      area += Number((this.width * this.height).toFixed(2));
    }

    return area;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export function getInfo(shape: Figure): string {
  return shape.getInfo();
}
