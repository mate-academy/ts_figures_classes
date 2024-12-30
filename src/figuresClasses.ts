export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  a: number;

  b: number;

  c: number;

  shape: string;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error("Invalid triangle sides. Can't form triangle.");
    }

    if (this.a === 0 || this.b === 0 || this.c === 0) {
      throw new Error("Length of one of the sides is 0. Can't form triangle.");
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const y: number = s * (s - this.a) * (s - this.b) * (s - this.c);
    const area: number = Math.floor(Math.sqrt(y) / 0.01) * 0.01;

    return area;
  }
}

export class Circle implements Figure {
  color: string;

  radius: number;

  shape: string;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error("Invalid radius. Can't form circle");
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;

  a: number;

  b: number;

  shape: string;

  constructor(color: string, a: number, b: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.shape = 'rectangle';

    if (this.a <= 0 || this.b <= 0) {
      throw new Error("Invalid side length. Can't form rectangle.");
    }
  }

  getArea(): number {
    return Math.floor((this.a * this.b) / 0.01) * 0.01;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
