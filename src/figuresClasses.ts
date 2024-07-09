type ShapeType = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeType;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType;

  color: string;

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the sides has size 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides do not form a triangle');
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

export class Circle implements Figure {
  shape: ShapeType;

  color: string;

  radius: number;

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number');
    } else {
      this.shape = 'circle';
      this.color = color;
      this.radius = radius;
    }
  }
}

export class Rectangle implements Figure {
  shape: ShapeType;

  color: string;

  height: number;

  width: number;

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }

  constructor(color: string, height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('One of the sides has size 0');
    } else {
      this.shape = 'rectangle';
      this.color = color;
      this.height = height;
      this.width = width;
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
