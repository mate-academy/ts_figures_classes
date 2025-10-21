type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    const longestSide: number = sides.pop()!;
    const sumSmallerSides: number = sides.reduce(
      (acc, currentValue) => acc + currentValue,
      0,
    );

    if (longestSide >= sumSmallerSides) {
      throw new Error('Sides 1, 2 and 3 can not form a triangle');
    }
  }

  public getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than zero');
    }
  }

  public getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(
        'The parameters width or height must be greater than zero',
      );
    }
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
