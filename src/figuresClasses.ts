export type Color = 'red' | 'blue' | 'green';

export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    readonly color: Color,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All values must be greater than 0.');
    }

    const largestSide = Math.max(a, b, c);
    const sumOfOtherSides = a + b + c - largestSide;

    if (largestSide >= sumOfOtherSides) {
      throw new Error(
        'The largest side must not be >= to the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return roundArea(area);
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    readonly color: Color,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius value must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    readonly color: Color,
    readonly width: number,
    readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All values must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
