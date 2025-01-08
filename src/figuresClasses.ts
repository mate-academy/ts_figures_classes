type FigureColor = 'red' | 'blue' | 'green';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    readonly color: FigureColor,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('any length is <= 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerTriangle: number = 0.5 * (this.a + this.b + this.c);

    const area = Math.sqrt(
      semiPerTriangle *
        (semiPerTriangle - this.a) *
        (semiPerTriangle - this.b) *
        (semiPerTriangle - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    readonly color: FigureColor,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    readonly color: FigureColor,
    readonly width: number,
    readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('any length is <= 0');
    }

    if (width < 1 || height < 1) {
      throw new Error('Bad input data!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
