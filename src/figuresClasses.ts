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
    const max = Math.max(a, b, c);

    if ((max >= (a + b + c - max)) || (a <= 0) || (b <= 0) || (c <= 0)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const underSqrt: number = s * (s - this.a) * (s - this.b) * (s - this.c);
    const AreaLong: number = Math.sqrt(underSqrt);
    const Area: number = +((AreaLong).toFixed(2));

    return Area;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error(`this radius ${radius} can't form a triangle`);
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const AreaLong: number = Math.PI * this.radius * this.radius;
    const Area: number = (Math.floor(AreaLong * 100)) / 100;

    return Area;
  }
}

export class Rectangle {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const Area: number = +((this.width * this.height).toFixed(2));

    return Area;
  }
}

export function getInfo(figure: Circle | Triangle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
