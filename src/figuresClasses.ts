export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    readonly color: string,
    readonly a: number,
    readonly b: number,
    readonly c: number,
    readonly shape: string = 'triangle',
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

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    readonly color: string,
    readonly radius: number,
    readonly shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius value must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    readonly color: string,
    readonly width: number,
    readonly height: number,
    readonly shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All values must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
