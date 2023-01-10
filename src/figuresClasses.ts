enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

type GetArea = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea:GetArea;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arrSides = [a, b, c];
    const isEverySideCorrect = arrSides.every((side) => side > 0);

    arrSides.sort((num1, num2) => num1 - num2);

    const longestSide = arrSides[arrSides.length - 1];
    const shorterSides = arrSides[0] + arrSides[1];

    if (!isEverySideCorrect) {
      throw new Error('Sides of a triangle must be pozitive numbers');
    } else if (longestSide >= shorterSides) {
      throw new Error('the longest side of a triangle is'
       + 'bigger than (or equal) a sum of two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of the circle must be a positive number');
    }
  }

  getArea(): number {
    const area = Math
      .floor(((this.radius * this.radius) * Math.PI) * 100) / 100;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height of the rectangle'
      + 'must be positive numbers');
    }
  }

  getArea():number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
