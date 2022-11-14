export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

function roundToHundreths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const biggestSide = Math.max(a, b, c);
    const sumOfSmallerSides = [a, b, c]
      .reduce((sum, curr) => sum + curr) - biggestSide;

    if (biggestSide >= sumOfSmallerSides) {
      throw new Error('The longest side of the triangle must be less'
      + 'than the sum of the other two');
    }

    if (a < 0 || b < 0 || c < 0) {
      throw new Error('Sides of the triangle must be bigger than 0');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const avergeSide = (a + b + c) / 2;

    const area = Math.sqrt(
      avergeSide * (avergeSide - a) * (avergeSide - b) * (avergeSide - c),
    );

    return roundToHundreths(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius < 0) {
      throw new Error('Radius of the Circle must be bigger than 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundToHundreths(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width < 0 || height < 0) {
      throw new Error('Sides of the rectangle must be bigger than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundToHundreths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
