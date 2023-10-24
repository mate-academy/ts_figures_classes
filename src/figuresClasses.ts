type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundedNumberToHundredths(number: number): number {
  return Math.floor(100 * number) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || longestSide >= a + b + c - longestSide) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundedNumberToHundredths(a);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not a circle');
    }
  }

  getArea(): number {
    const circle: number = Math.PI * (this.radius * this.radius);

    return roundedNumberToHundredths(circle);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not a Rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
