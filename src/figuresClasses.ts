
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

function roundNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape.triangle = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const longestSide: number = Math.max(a, b, c);
    const twoOtherSides: number = (a + b + c) - longestSide;

    if (longestSide >= twoOtherSides) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const squareOfTriangle : number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return roundNumber(squareOfTriangle);
  }
}

export class Circle implements Figure {
  shape: Shape.circle = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const squareOfCircle = Math.PI * this.radius ** 2;

    return roundNumber(squareOfCircle);
  }
}

export class Rectangle implements Figure {
  shape: Shape.rectangle = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
