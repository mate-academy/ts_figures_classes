type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function rounding(x: number): number {
  return Math.floor(x * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Your error message');
    }

    const max = Math.max(a, b, c);
    const sumOthers = a + b + c - max;

    if (max >= sumOthers) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return rounding(area);
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Your error message');
    }
    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return rounding(area);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Your error message');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return rounding(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
