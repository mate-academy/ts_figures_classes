type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

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
    const checkLength = (param: number): boolean => param <= 0;
    const checkMaxSide = (side1: number,
      side2: number,
      side3: number): boolean => {
      const maxSide = Math.max(side1, side2, side3);
      const sumOfSides = (side1 + side2 + side3) - maxSide;

      return maxSide >= sumOfSides;
    };

    if (checkLength(a) || checkLength(b) || checkLength(c)) {
      throw new Error('Invalid side length');
    }

    if (checkMaxSide(a, b, c)) {
      throw new Error(
        'Length of the longest side must be greater than the sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round((square) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const PI = this.radius * Math.PI * this.radius;

    return Math.floor((PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Side must be include date');
    }
  }

  getArea(): number {
    const full = this.width * this.height;

    return Math.round((full) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
