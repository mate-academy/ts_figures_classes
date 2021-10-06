enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides must be positive');
    }

    if (this.a >= this.b + this.c
        || this.b >= this.a + this.c
        || this.c >= this.b + this.a) {
      throw new Error(`Sides ${this.a}, ${this.b}`
        + ` and ${this.c} can't form a triangle`);
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    return Math.sqrt(perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return 3.14 * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
