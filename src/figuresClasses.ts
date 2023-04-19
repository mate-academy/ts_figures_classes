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

  getArea(): number {
    const half = (this.a
            + this.b
            + this.c)
            / 2;

    return Math.floor(+((Math.sqrt(
      half
      * (half - this.a)
      * (half - this.b)
      * (half - this.c),
    )
      * 100))) / 100;
  }

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all values have to be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('not triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  getArea(): number {
    return Math.floor(+(((2 * Math.PI * this.radius * this.radius) / 2)
    * 100)) / 100;
  }

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('all values have to be greater than 0');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  getArea(): number {
    return +((this.width * this.height)
      .toFixed(2));
  }

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('all values have to be greater than 0');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
