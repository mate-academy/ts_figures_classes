export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

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

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0) {
      throw new Error(`Triangle side 'a' must be > 0, received: ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Triangle side 'b' must be > 0, received: ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Triangle side 'c' must be > 0, received: ${c}`);
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error(
        `Invalid triangle: sides a=${a}, b=${b}, c=${c} do not satisfy the triangle inequality`,
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error(`Circle radius must be > 0, received: ${radius}`);
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const a = Math.PI * this.radius ** 2;

    return Math.floor(a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0) {
      throw new Error(`Rectangle width must be > 0, received: ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Rectangle height must be > 0, received: ${height}`);
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
