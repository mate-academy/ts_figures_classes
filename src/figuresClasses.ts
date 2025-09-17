type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The lengths of the sides must be positive.');
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error(`Sides ${a}, ${b} and ${c} cannot form a triangle.`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  shape: Shape = 'triangle';

  color: Color;

  private a: number;

  private b: number;

  private c: number;

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('The radius must be positive.');
    }

    this.color = color;
    this.radius = radius;
  }

  shape: Shape = 'circle';

  color: Color;

  private radius: number;

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive.');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  shape: Shape = 'rectangle';

  color: Color;

  private width: number;

  private height: number;

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
