export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides should be positive numbers');
    }

    const longest = Math.max(a, b, c);
    const sumOfOtherTwo = a + b + c - longest;

    if (longest >= sumOfOtherTwo) {
      throw new Error(
        `Triangle sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius should be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides should be positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
