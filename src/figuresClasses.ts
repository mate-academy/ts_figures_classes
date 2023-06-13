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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides can not be less 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides can not form a triangle');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(halfPerimeter
        * (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
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
      throw new Error('Invalid side size');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
