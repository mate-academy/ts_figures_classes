enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

enum Shape {
  Triangle = 'TRIANGLE',
  Circle = 'CIRCLE',
  Rectangle = 'RECTANGLE',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid sides');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b || longestSide >= b + c || longestSide >= a + c) {
      throw new Error('One of the sides is too big');
    }

    this.shape = Shape.Triangle;
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        halfOfPerimeter
        * (halfOfPerimeter - this.a)
        * (halfOfPerimeter - this.b)
        * (halfOfPerimeter - this.c),
      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid sides');
    }

    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure
    .shape.toLowerCase()} - ${figure.getArea()}`;
}
