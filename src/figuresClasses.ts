type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
type Side = number;

export interface Figure {
  a?: Side,
  b?: Side,
  c?: Side,
  height?: Side,
  width?: Side,
  shape?: Shape,
  color: Color,
  getArea(): Side,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: Side = 0,
    public b: Side = 0,
    public c: Side = 0,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one of the Sides of the triangle is missing or <= 0');
    }

    const longSide = Math.max(a, b, c);
    const arrSide = [a, b, c];
    const sumLessSide = arrSide
      .filter((Side: Side) => Side !== longSide)
      .reduce((sum, Side) => sum + Side, 0);

    if (longSide >= sumLessSide) {
      throw new Error(
        'the longest Side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): Side {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: Side = 0,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): Side {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: Side = 0,
    public height: Side = 0,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): Side {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape}`
  + ` - ${figure.getArea()}`;
}
