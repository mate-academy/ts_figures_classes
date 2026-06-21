export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  public color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive');
    }

    const longest = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longest;

    if (longest >= sumOfOthers) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return roundDownToHundredths(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  public color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  public getArea(): number {
    return roundDownToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  public color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  public getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
