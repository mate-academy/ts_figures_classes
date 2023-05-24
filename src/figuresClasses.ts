export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public A: number,
    public B: number,
    public C: number,
  ) {
    const sides: number[] = [A, B, C];

    const hasZeroLengthSide = sides.some((side) => side <= 0);
    const longestSide = Math.max(...sides);
    const hasTooLongSide = sides.reduce((sum, side) => sum + side)
    - longestSide <= longestSide;

    if (hasZeroLengthSide) {
      throw new Error('Invalid side length. '
      + 'Side length must be greater than 0.');
    }

    if (hasTooLongSide) {
      throw new Error('Invalid triangle sides. '
      + 'The sum of any two sides must be greater than the third side.');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const semiperimeter = (this.A + this.B + this.C) / 2;
    const area = Math.sqrt(semiperimeter * (semiperimeter - this.A)
    * (semiperimeter - this.B)
      * (semiperimeter - this.C));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape:'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Invalid side length. '
      + 'Side length must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    const sides: number[] = [width, height];

    const hasZeroLengthSide = sides.some((side) => side <= 0);

    if (hasZeroLengthSide) {
      throw new Error('Invalid side length. '
      + 'Side length must be greater than 0.');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
