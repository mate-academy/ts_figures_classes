type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one side is <= 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('one side is >= sum of other two');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return parseFloat(
      (
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) - 0.005
      ).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius <= 0');
    }
  }

  getArea(): number {
    return parseFloat((Math.PI * Math.pow(this.radius, 2) - 0.005).toFixed(2));
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('one side <= 0');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height - 0.005).toFixed(2));
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
