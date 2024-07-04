type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSmallerSides = [a, b, c]
      .filter((num) => num !== Math.max(a, b, c))
      .reduce((cur, next) => cur + next, 0);

    this.shape = 'triangle';
    this.color = color;

    if (Math.max(a, b, c) >= triangleSmallerSides) {
      throw new Error(
        'Longest side of a triangle must be less than sum of other two sides',
      );
    } else if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than zero');
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Circle radius must be greater than zero.');
    } else {
      this.radius = radius;
    }
  }

  getArea(): number {
    const area: number = this.radius ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than zero');
    } else {
      this.width = width;
      this.height = height;
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
