export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    const maxSide = Math.max(a, b, c);

    const CONTEXT_A = maxSide === a && maxSide >= b + c;
    const CONTEXT_B = maxSide === b && maxSide >= a + c;
    const CONTEXT_C = maxSide === c && maxSide >= a + b;

    if (CONTEXT_A || CONTEXT_B || CONTEXT_C) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error(`This not a circle`);
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const result = Math.PI * Math.pow(this.radius, 2);

    return parseFloat(result.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("This don't is a rectangle");
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
