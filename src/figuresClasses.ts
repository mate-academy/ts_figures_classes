type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
  color: Color;
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number, color: Color) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => y - x);
    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  color: Color;
  private radius: number;

  constructor(radius: number, color: Color) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  color: Color;
  private width: number;
  private height: number;

  constructor(width: number, height: number, color: Color) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;
    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
