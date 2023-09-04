enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  a: number;

  b: number;

  c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a >= b + c || a <= Math.abs(b - c) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Impossible triangle sides');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.floor(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  radius: number;

  constructor(public color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius is less or equals zero');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.floor(100 * Math.PI * (this.radius ** 2)) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  width: number;

  height: number;

  constructor(public color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides are not possible');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const info = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return info;
}
