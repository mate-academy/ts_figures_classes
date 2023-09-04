type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

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

  perimeter: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = a + b + c;

    const longestSide: number = Math.max(a, b, c);

    if (Math.min(a, b, c) <= 0 || longestSide >= this.perimeter - longestSide) {
      throw Error('Incorrect triangle sides');
    }
  }

  getArea(): number {
    const semiperimeter = this.perimeter / 2;

    const exactSquare: number = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return roundToHundredths(exactSquare);
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw Error('Incorrect radius');
    }
  }

  getArea(): number {
    const exactSquare: number = Math.PI * this.radius ** 2;

    return roundToHundredths(exactSquare);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (Math.min(width, height) <= 0) {
      throw Error('Incorrect radius');
    }
  }

  getArea(): number {
    return roundToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
