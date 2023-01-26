type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sumOtherSides = (a + b + c) - longestSide;

    if (longestSide >= sumOtherSides) {
      throw new Error('Incorrect values'
        + ' a side of a triangle cannot be greater'
          + ' than the sum of the other two sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect values,'
        + ' a side of a triangle cannot be less than zero');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius cannot be zero or a negative value');
    }
  }

  getArea(): number {
    const s = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return s;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The side of the rectangle'
        + 'cannot be zero or a negative value');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
