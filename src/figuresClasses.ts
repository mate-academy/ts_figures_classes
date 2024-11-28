export type FigureType = 'triangle' | 'circle' | 'rectangle';
export type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureType;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureType;

  color: FigureColor;

  a: number;

  b: number;

  c: number;

  constructor(color: FigureColor, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides cannot form a triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Формула Герона

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureType;

  color: FigureColor;

  radius: number;

  constructor(color: FigureColor, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.pow(this.radius, 2) * Math.PI;

    return Math.round(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureType;

  color: FigureColor;

  width: number;

  height: number;

  constructor(color: FigureColor, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
