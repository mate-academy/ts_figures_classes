type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

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

  shape = Shape.Triangle;

  constructor(color: Color, a: number, b: number, c: number) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('Wrong radius length');
    }

    if (
      a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  r: number;

  color: Color;

  shape = Shape.Circle;

  constructor(color: Color, r: number) {
    if (r <= 0) {
      throw new Error('Wrong radius length');
    }

    this.r = r;
    this.color = color;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r * this.r) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  a: number;

  b: number;

  color: Color;

  shape = Shape.Rectangle;

  constructor(color: Color, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Wrong sides length');
    }

    this.a = a;
    this.b = b;
    this.color = color;
  }

  getArea(): number {
    return this.a * this.b * 100 / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
