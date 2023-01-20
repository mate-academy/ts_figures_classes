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

function getRounding(area: number): number {
  return Math.floor(area * 100) / 100;
}

function sidesIsValid([...args]: number[]): boolean {
  return args.every((side) => side > 0);
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];

    if (!sidesIsValid(triangleSides)) {
      throw new Error('Side length cannot be zero or has negative value');
    }
    triangleSides.sort((shortest, longest) => (longest - shortest));

    const theLongestSide = triangleSides.shift();
    const theShortestSides = triangleSides.reduce((total, side) => (
      total + side));

    if (theLongestSide >= theShortestSides) {
      throw new Error('The biggest side cannot '
        + 'be bigger than sum of two others');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
        * (semiPerimetr - this.a)
        * (semiPerimetr - this.b)
        * (semiPerimetr - this.c));

    return getRounding(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!sidesIsValid([radius])) {
      throw new Error('Radius length cannot be zero or has negative value.');
    }
  }

  getArea(): number {
    return getRounding(Math.PI * this.radius ** 2);
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

    if (!sidesIsValid(rectangleSides)) {
      throw new Error('Side length cannot be zero or has negative value.');
    }
  }

  getArea(): number {
    return getRounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
