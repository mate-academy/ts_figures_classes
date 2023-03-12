/* eslint-disable no-useless-constructor */
enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0)
      || ((a + b) <= c || (a + c) <= b || (b + c) <= a)
    ) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    return Math.floor((this.height * this.width) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
