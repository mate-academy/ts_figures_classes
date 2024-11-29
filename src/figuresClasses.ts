export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkSides(errorMessage: string, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    checkSides('All sides must be greater than 0', a, b, c);

    const longestSide = Math.max(a, b, c);
    const sumOfOtherTwo = a + b + c - longestSide;

    if (longestSide >= sumOfOtherTwo) {
      throw new Error(
        'The longest side must be shorter than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    checkSides('Width and height must be greater than 0', width, height);
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
