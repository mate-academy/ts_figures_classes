export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  shape: 'triangle' = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (!['red', 'green', 'blue'].includes(color)) {
      throw new Error(
        `Invalid color: ${color}. Allowed values are 'red', 'green', 'blue'`,
      );
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const longest = Math.max(a, b, c);

    if (longest >= a + b + c - longest) {
      throw new Error(`Triangle inequality violated: sides ${a}, ${b}, ${c}`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  shape: 'circle' = 'circle';

  radius: number;

  constructor(color: Color, radius: number) {
    if (!['red', 'green', 'blue'].includes(color)) {
      throw new Error(
        `Invalid color: ${color}. Allowed values are 'red', 'green', 'blue'`,
      );
    }

    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape: 'rectangle' = 'rectangle';

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (!['red', 'green', 'blue'].includes(color)) {
      throw new Error(
        `Invalid color: ${color}. Allowed values are 'red', 'green', 'blue'`,
      );
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
