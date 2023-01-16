type Shape = 'triangle'| 'circle'| 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundedArea(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];
    const checkValidSides = triangleSides.every((side) => side > 0);

    triangleSides.sort((shortest, longest) => (longest - shortest));

    const longestSide = triangleSides.shift();
    const sumOfShortestSides = triangleSides.reduce((total, side) => (
      total + side));

    if (!checkValidSides) {
      throw new Error('Side length cannot be zero or takes negative value.');
    }

    if (longestSide >= sumOfShortestSides) {
      throw new Error('Length of biggest side cannot '
      + 'be bigger than sum of two oher sides.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return roundedArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius length cannot be zero or negative.');
    }
  }

  getArea(): number {
    return roundedArea(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const rectangleSides = [width, height];
    const checkValidSides = rectangleSides.some((side) => side <= 0);

    if (checkValidSides) {
      throw new Error('Side length cannot be zero or negative.');
    }
  }

  getArea(): number {
    return roundedArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
