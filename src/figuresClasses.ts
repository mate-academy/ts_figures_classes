type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const negative = a <= 0 || b <= 0 || c <= 0;
    const theLongestSide = Math.max(a, b, c);
    const invalidTriangle = (theLongestSide) >= ((a + b + c) - theLongestSide);

    if (negative) {
      throw new Error('Negative triangle side');
    }

    if (invalidTriangle) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const semiSum = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semiSum
          * (semiSum - this.a)
          * (semiSum - this.b)
          * (semiSum - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Negative radius');
    }
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
  ) {
    const negative = a <= 0 || b <= 0;

    if (negative) {
      throw new Error('Negative rectangle side');
    }
  }

  getArea(): number {
    const square = this.a * this.b;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
