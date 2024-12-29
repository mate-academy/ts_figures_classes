export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
    }

    this.color = color;
    this.shape = 'triangle'; // Add shape property
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

export class Circle implements Figure {
  color: string;

  shape: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.shape = 'circle'; // Add shape property
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

export class Rectangle implements Figure {
  color: string;

  shape: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.color = color;
    this.shape = 'rectangle'; // Add shape property
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
