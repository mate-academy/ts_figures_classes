export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

function validatePositiveLengths(lengths: number[]): void {
  const hasInvalidLength: boolean = lengths.some(
    (length: number): boolean => length <= 0,
  );

  if (hasInvalidLength) {
    throw new Error('All figure lengths must be greater than zero');
  }
}

export class Triangle implements Figure {
  public readonly shape: Shape = Shape.Triangle;

  constructor(
    public readonly color: Color,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    validatePositiveLengths([a, b, c]);

    const sides: number[] = [a, b, c].sort(
      (firstSide: number, secondSide: number): number => {
        return firstSide - secondSide;
      },
    );

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b} and ${c} cannot form a triangle`);
    }
  }

  public getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = Shape.Circle;

  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    validatePositiveLengths([radius]);
  }

  public getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = Shape.Rectangle;

  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly height: number,
  ) {
    validatePositiveLengths([width, height]);
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
