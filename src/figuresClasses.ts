enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {

  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  color: Color;

  shape: Shape;

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,

    a: number,
    b: number,
    c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0
        || this.b <= 0
        || this.c <= 0
        || this.a + this.b <= this.c
        || this.a + this.c <= this.b
        || this.b + this.c <= this.a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(100 * s) / 100;
  }
}

export class Circle {
  color: Color;

  shape: Shape;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    this.shape = Shape.Circle;
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  color: Color;

  shape: Shape;

  width: number;

  height: number;

  constructor(
    color: Color,

    width: number,

    height: number,
  ) {
    this.shape = Shape.Rectangle;
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
