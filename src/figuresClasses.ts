type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

function validatePositive(...lengths: number[]): void {
  if (lengths.some((length) => !Number.isFinite(length) || length <= 0)) {
    throw new Error('All lengths must be positive numbers');
  }
}

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape = 'triangle' as const;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    validatePositive(a, b, c);

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error("These sides can't form a triangle");
    }
  }

  public getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape = 'circle' as const;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    validatePositive(radius);
  }

  public getArea(): number {
    return roundDownToHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle' as const;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    validatePositive(width, height);
  }

  public getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
