enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRoundedArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

function checkValidSides([...args]: number[]): boolean {
  return args.every((side) => side > 0);
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];

    if (!checkValidSides(triangleSides)) {
      throw new Error('Side length cannot be zero or takes negative value.');
    }

    triangleSides.sort((shortest, longest) => (longest - shortest));

    const longestSide = triangleSides.shift();
    const sumOfShortestSides = triangleSides.reduce((total, side) => (
      total + side));

    if (longestSide >= sumOfShortestSides) {
      throw new Error('Length of biggest side cannot '
      + 'be bigger than sum of two oher sides.');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return getRoundedArea(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!checkValidSides([radius])) {
      throw new Error('Radius length cannot be zero or takes negative value.');
    }
  }

  getArea(): number {
    return getRoundedArea(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const rectangleSides = [width, height];

    if (!checkValidSides(rectangleSides)) {
      throw new Error('Side length cannot be zero or takes negative value.');
    }
  }

  getArea(): number {
    return getRoundedArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
