export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Current sides cannot form a triangle');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const ar = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      ar * (ar - this.a) * (ar - this.b) * (ar - this.c),
    );
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius can`t be less or equal 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height can`t be less or equal 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return Number.isInteger(figure.getArea())
    ? `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
    : `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
