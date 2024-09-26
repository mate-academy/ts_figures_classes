type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getNumberWithTwoDecimalPlaces(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of a triangle must be more than 0.');
    }

    const longestSide = Math.max(a, b, c);
    const sumOfOtherSides = [a, b, c]
      .filter((side) => side !== longestSide)
      .reduce((sum, side) => sum + side, 0);

    if (longestSide >= sumOfOtherSides) {
      throw new Error(
        // eslint-disable-next-line max-len
        'The longest side of a triangle must be shorter than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return getNumberWithTwoDecimalPlaces(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of a circle must be more than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getNumberWithTwoDecimalPlaces(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides of a rectangle must be more than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getNumberWithTwoDecimalPlaces(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
