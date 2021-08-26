enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  red,
  blue,
  green,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number | never;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a >= this.b + this.c || this.b >= this.a + this.c
    || this.c >= this.a + this.b || this.a <= 0
    || this.b <= 0 || this.c <= 0) {
      throw new Error('Please, enter valid data');
    }
    this.shape = Shape.Triangle;
  }

  getArea(): number | never {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a)
    * (halfOfPerimeter - this.b)
    * (halfOfPerimeter - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Please, enter valid data');
    }
    this.shape = Shape.Circle;
  }

  getArea(): number {
    return +(3.14 * this.radius ** 2).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Please, enter valid data');
    }
    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
