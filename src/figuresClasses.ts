type Color = 'blue' | 'red' | 'green';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

export class Triangle {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of the arguments are negative');
    }

    const longestSide = Math.max(this.a, this.b, this.c);
    const sumOfShortestSides = (this.a + this.b + this.c) - longestSide;

    if (longestSide >= sumOfShortestSides) {
      throw new Error('Sum of two sides are shorter than longest side');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const perimetr = (a + b + c) / 2;
    const area = Math.sqrt(
      perimetr
      * (perimetr - a)
      * (perimetr - b)
      * (perimetr - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Value cant be negative or 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of the arguments are negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
