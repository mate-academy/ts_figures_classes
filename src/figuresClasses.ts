type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape,
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
    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0) {
      throw new Error('Side length cannot be less than or equal to zero');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= (a + b + c - longestSide)) {
      throw new Error('The longest side of a triangle cannot be '
        + 'greater than or equal to the sum of two others');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(perimeter * (perimeter - this.a) * (
      perimeter - this.b) * (perimeter - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Radius cannot be less than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
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
      throw new Error('Side length cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
