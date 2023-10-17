type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const longestSide: number = Math.max(a, b, c);

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || longestSide >= ((a + b + c) - longestSide)
    ) {
      throw new Error('Invalid Triangle');
    }
  }

  getArea(): number {
    const semiSum: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiSum
      * (semiSum - this.a)
      * (semiSum - this.b)
      * (semiSum - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid Circle');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid Rectangle');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
