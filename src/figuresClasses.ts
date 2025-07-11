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
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side is not a positive number');
    }

    const maxSide = Math.max(this.a, this.b, this.c);
    const otherSides = this.a + this.b + this.c - maxSide;

    if (maxSide >= otherSides) {
      throw new Error('Figure is not a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius is not a positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width or height is not a positive number');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(Figure: Circle | Rectangle | Triangle): string {
  return `A ${Figure.color} ${Figure.shape} - ${Figure.getArea()}`;
}
