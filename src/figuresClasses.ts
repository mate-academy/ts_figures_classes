export enum Shape {
  Triang = 'triangle',
  Circ = 'circle',
  Rectang = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  area: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (max >= sum - max) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
    this.shape = Shape.Triang;

    const s: number = (a + b + c) / 2;

    this.area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  area: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.shape = Shape.Circ;

    this.area = Math.PI * radius ** 2;
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  area: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.color = color;
    this.shape = Shape.Rectang;

    this.area = width * height;
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
