type Color = 'green' | 'red' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Every side of the triangle must be greater than 0');
    }

    const biggestSide = Math.max(this.a, this.b, this.c);

    if (biggestSide >= this.b + this.c + this.a - biggestSide) {
      throw new Error('Every side must be less than two other together');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area
      = Math.floor(((semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c))
      ** 0.5) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;

    if (this.radius <= 0) {
      throw new Error('Radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Every side of the rectangle must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
