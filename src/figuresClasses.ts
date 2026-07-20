type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides a, b and c cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const rawArea = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(rawArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  radius: number;

  color: Color;

  constructor(color: Color, radius: number) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const likeArea = Math.PI * this.radius ** 2;

    return Math.floor(likeArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  color: Color;

  constructor(color: Color, width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be greater than 0');
    }
  }

  getArea(): number {
    const rawArea = this.width * this.height;

    return Math.floor(rawArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
