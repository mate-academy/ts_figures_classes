type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Color;
  shape: Shape;
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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides of ${this.shape} should be great than 0`);
    }

    if (Math.max(...[a, b, c]) >= a + b + c - Math.max(...[a, b, c])) {
      throw new Error(`
      For a ${this.shape}
      , the sum of any two sides must be greater than the third.
      Otherwise, the two sides will simply
      "fall" on the third and the triangle will not work. FIX THIS!!!`);
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math
      .sqrt(halfPerimeter
        * ((halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius of ${this.shape} should be great than 0`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Width / height of ${this.shape} should be great than 0`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(100 * area) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
