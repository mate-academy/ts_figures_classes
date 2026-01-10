type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

function RoundToHundredths(num: number): number {
  return Math.trunc(num * 100) / 100;
}

export interface Figure {
  color: Color;
  shape: Shape;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("Sides can't be negative or zero");
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Any two sides altogether should be greater than another one',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return RoundToHundredths(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error("Radius can't be negative or zero");
    }
  }

  getArea(): number {
    return RoundToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height can't be negative or zero");
    }
  }

  getArea(): number {
    return RoundToHundredths(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
