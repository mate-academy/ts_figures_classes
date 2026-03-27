type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

function ensurePositiveLengths(lengths: number[]): void {
  if (lengths.some((length) => length <= 0)) {
    throw new Error('All lengths must be greater than 0');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    ensurePositiveLengths([a, b, c]);

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    ensurePositiveLengths([radius]);
  }

  getArea(): number {
    return roundToHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    ensurePositiveLengths([width, height]);
  }

  getArea(): number {
    return roundToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
