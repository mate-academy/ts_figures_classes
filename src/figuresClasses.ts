
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong number in the sides of the triangle!');
    }

    const longestSide = Math.max(a, b, c);
    const sumOfTwoSides = a + b + c - longestSide;

    if (longestSide >= sumOfTwoSides) {
      throw new Error('It\'s not a triangle!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.floor(
      (Math.sqrt(
        semiPerimeter
        * (semiPerimeter - a)
        * (semiPerimeter - b)
        * (semiPerimeter - c),
      )) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong number in the radius of the circle!');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong number in the sides of the rectangle!');
    }
  }

  getArea():number {
    const { width, height } = this;
    const area = Math.floor((width * height) * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
