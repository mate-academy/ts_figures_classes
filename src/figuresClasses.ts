function toTwoNumsAfter(num: number): number {
  return Math.trunc(num * 100) / 100;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color; // eslint-disable-line
  a: number; // eslint-disable-line
  b: number; // eslint-disable-line
  c: number; // eslint-disable-line

  constructor(color: Color, a: number, b: number, c: number) {
    const theLongestSide = Math.max(a, b, c);
    const isLengthOfsideOk = theLongestSide < (a + b + c - theLongestSide);

    if (a <= 0 || b <= 0 || c <= 0 || !isLengthOfsideOk) {
      throw new Error('Triangle with such sides is impossible');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return toTwoNumsAfter(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))); // eslint-disable-line
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color; // eslint-disable-line
  radius: number; // eslint-disable-line

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle with such radius is impossible');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return toTwoNumsAfter(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color; // eslint-disable-line
  width: number; // eslint-disable-line
  height: number; // eslint-disable-line

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle with such sides is impossible');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return toTwoNumsAfter(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
