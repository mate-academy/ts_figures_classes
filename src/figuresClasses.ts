export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid number(s)');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('invalid number(s)');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('invalid number(s)');
    }

    this.radius = radius;
  }

  getArea(): number {
    const p = Math.PI * this.radius ** 2;

    return Math.floor(p * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('invalid number(s)');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
