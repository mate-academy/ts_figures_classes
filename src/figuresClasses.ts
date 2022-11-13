export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function roundArea(digit: number): number {
  return Math.floor(digit * 100) / 100;
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

    if (a <= 0
      || b <= 0
      || c <= 0
      || a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)) {
      throw new Error('Resulting value should not be 0');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundArea(area);
  }
}

export class Circle {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Resulting value should not be 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundArea(area);
  }
}

export class Rectangle {
  shape: Shape;

  color: Color;

  height: number;

  width: number;

  constructor(color: Color, height: number, width: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.height = height;
    this.width = width;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Resulting value should not be 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
