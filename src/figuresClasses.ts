export enum Shape {
  TriangleType = 'triangle',
  CircleType = 'circle',
  RectangleType = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.TriangleType;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side of the triangle must be greater than zero');
    }

    const maxSideLength = Math.max(a, b, c);

    if (a + b + c - maxSideLength <= maxSideLength) {
      throw new Error('One side of a triangle cannot be'
        + ' greater than the sum of the others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return +square.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.CircleType;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Еhe radius cannot be less than zero');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.RectangleType;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('The side of a rectangle cannot be less than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
