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

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const sqrt: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(sqrt * 100) / 100;
  }

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side of triangle can not be zero or negative');
    }

    if ((a >= (b + c)) || (b >= (a + c)) || (c >= (a + b))) {
      throw new Error(
        'Side of triangle can not be longer than sum of others sides',
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
    this.color = color;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius of circle can not be zero or negative');
    }

    this.radius = radius;
    this.shape = 'circle';
    this.color = color;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width or height of rectangle can not be zero or negative',
      );
    }

    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
    this.color = color;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
