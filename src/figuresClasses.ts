export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const biggestSide = Math.max(this.a, this.b, this.c);
    const sumOfSmallerSides = [this.a, this.b, this.c]
      .reduce((sum, curr) => sum + curr) - biggestSide;

    if (biggestSide >= sumOfSmallerSides) {
      throw new Error('The longest side of the triangle must be less'
      + 'than the sum of the other two');
    }

    if (this.a < 0 || this.b < 0 || this.c < 0
      || biggestSide >= sumOfSmallerSides) {
      throw new Error('Sides of the triangle must be bigger than 0');
    }
  }

  shape: Shape;

  getArea(): number {
    const avergeSide = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      avergeSide * (avergeSide - this.a)
      * (avergeSide - this.b) * (avergeSide - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius < 0) {
      throw new Error('Radius of the Circle must be bigger than 0');
    }
  }

  shape: Shape;

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width < 0 || this.height < 0) {
      throw new Error('Sides of the rectangle must be bigger than 0');
    }
  }

  shape: Shape;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
