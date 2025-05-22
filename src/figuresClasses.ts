type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('length must be > 0');
    } else if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a
    ) {
      throw new Error('sides cannot form a triangle');
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  radius: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('length must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('length must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
