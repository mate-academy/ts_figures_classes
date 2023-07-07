/* eslint-disable @typescript-eslint/lines-between-class-members */
enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
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

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    // I called semi perimeter as 'sp' to reduce the length of the line
    const sp = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(
      sp * (sp - this.a) * (sp - this.b) * (sp - this.c),
    );

    return Math.floor(square * 100) / 100;
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
    const square = Math.PI * (this.radius ** 2);

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

  getArea(): number {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
