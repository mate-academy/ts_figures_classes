// import { Triangle } from './figuresClasses';
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;

    if (a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;

    if (this.radius <= 0) {
      throw new Error('Radius value must be positive');
    }
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height can\'t form a rectangle');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
