type ShapeType = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Wrong, sides of triangle can not form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong, sides must be positive');
    }
  }

  getArea(): number {
    // S=√p(p-a)(p-b)(p-c)
    // p=(a+b+c)/2
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    // S = πr2
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Wrong width or height');
    }
  }

  getArea(): number {
    // S = a*b
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
