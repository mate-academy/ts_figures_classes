type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be greater than 0.');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Incorrect side length');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius should be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  hight: number;

  constructor(color: Color, width: number, hight: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.hight = hight;

    if (this.width <= 0 || this.hight <= 0) {
      throw new Error('Width and height should be greater than 0.');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.hight);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
