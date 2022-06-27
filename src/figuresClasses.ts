type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color:Color;
  shape:Shape;
  getArea():number;
}

export class Triangle implements Figure {
  color: Color;

  shape:Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (Math.max(...[a, b, c]) >= a + b + c - Math.max(...[a, b, c])) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  shape:Shape = 'circle';

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape:Shape = 'rectangle';

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(100 * area) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
