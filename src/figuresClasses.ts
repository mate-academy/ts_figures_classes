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
  getArea: () => number;
}

export function isTriangle(a: number, b: number, c: number): boolean {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  const sortedSides = [a, b, c].sort((side1, side2) => side2 - side1);
  const theLargestSide = sortedSides[0];

  if (theLargestSide >= sortedSides[1] + sortedSides[2]) {
    return false;
  }

  return true;
}
export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isTriangle(this.a, this.b, this.c)) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerim
        * (semiPerim - this.a)
        * (semiPerim - this.b)
        * (semiPerim - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('It is not a circle');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius) ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('It is not a rectangle');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
