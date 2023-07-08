type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle {
  a: number;

  b: number;

  c: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, a: number, b: number, c: number) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('wrong radius length');
    }

    if (
      a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle {
  r: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, r: number) {
    if (r <= 0) {
      throw new Error('wrong radius length');
    }

    this.r = r;
    this.color = color;
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r * this.r) * 100) / 100;
  }
}

export class Rectangle {
  a: number;

  b: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('wrong sides length');
    }

    this.a = a;
    this.b = b;
    this.color = color;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
