enum Shape {
  triangle = 'triangle',
  rectangle = 'rectangle',
  circle = 'circle'
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

function squareRound(square: number): number {
  const result: number = Math.floor(square * 100) / 100;

  return result;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side(s) of triangle not correct'
      + ' (side length must be > 0)');
    }

    const max: number = Math.max(this.a, this.b, this.c);

    if (max >= (this.a + this.b + this.c - max)) {
      throw new Error('Triangle cannot be built (the longest side of a '
        + 'triangle must be < than a sum of two others)');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return squareRound(square);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius length must be > 0');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return squareRound(square);
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
      throw new Error('Side(s) of rectangle not correct'
      + ' (side length must be > 0)');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return squareRound(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
