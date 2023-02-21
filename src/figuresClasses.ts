type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a >= this.b + this.c
        || this.b >= this.a + this.c
        || this.c >= this.a + this.b
        || this.a <= 0
        || this.b <= 0
        || this.c <= 0
    ) {
      throw new Error('Such a figure does not exist');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  color: Color;

  r: number;

  constructor(color: Color, r: number) {
    this.shape = 'circle';
    this.color = color;
    this.r = r;

    if (this.r <= 0) {
      throw new Error('Such a figure does not exist');
    }
  }

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Such a figure does not exist');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
