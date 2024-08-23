export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle: All sides must have non-zero length');
    }

    const longestSide = Math.max(a, b, c);
    const sumTwoOthers = a + b + c - longestSide;

    if (longestSide >= sumTwoOthers) {
      throw new Error(
        `Invalid triangle:
        The longest side of a triangle is >= than a sum of two others`,
      );
    }

    this.shape = 'triangle';
  }

  public getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +square.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle: The circle with zero radius');
    }

    this.shape = 'circle';
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle: All sides must have non-zero length');
    }

    this.shape = 'rectangle';
  }

  public getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
