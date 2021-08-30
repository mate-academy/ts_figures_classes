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
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c
      || a + c <= b
      || b + c <= a
      || a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius value must be positive');
    }
  }

  getArea(): number {
    return 3.14 * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height can\'t form a rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
