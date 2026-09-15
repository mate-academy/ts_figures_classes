type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDownToHundredths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public readonly shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be greater than 0.');
    }

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error('Triangle sides cannot form a triangle.');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public readonly shape: 'circle' = 'circle';

  constructor(
    public readonly color: Color,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  getArea(): number {
    return roundDownToHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0.');
    }
  }

  getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
