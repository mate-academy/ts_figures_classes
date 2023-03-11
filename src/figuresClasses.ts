enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any length can not be <= 0');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= ((a + b + c) - longestSide)) {
      throw new Error('The longest side of a triangle should'
      + 'be >= than a sum of two others');
    }
  }

  getArea(): number {
    const sum = 0.5 * (this.a + this.b + this.c);

    const square = sum * (sum - this.a) * (sum - this.b)
    * (sum - this.c);

    return Math.floor(Math.sqrt(square) * 100) / 100;
  }
}

export class Circle {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be 0 or less');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any length can not be <= 0');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
