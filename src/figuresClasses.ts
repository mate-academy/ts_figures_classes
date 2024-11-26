export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0.');
    }

    if (a + c <= b || a + b <= c || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle.`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'The width and length of the rectangle must be greater than 0.',
      );
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
