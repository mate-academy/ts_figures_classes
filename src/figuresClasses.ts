type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  color: Color;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('error');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  radius: number;

  color: Color;

  constructor(
    color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  color: Color;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} `
    + `${figure.constructor.name.toLowerCase()} - ${figure.getArea()}`;
}
