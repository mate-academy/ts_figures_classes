type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function hasZeroSize(...lengthes: number[]): void {
  const hasNullSize = lengthes.some((number) => number <= 0);

  if (hasNullSize) {
    throw new Error('each side or radius must be greater than zero');
  }
}

function roundNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    hasZeroSize(a, b, c);

    const maxSide = Math.max(a, b, c);
    const sidesSum = a + b + c;
    const hasImpossibleSize = maxSide >= sidesSum - maxSide;

    if (hasImpossibleSize) {
      throw new Error('biggest side can\'t be greater that sum of another two');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const spA = (semiperimeter - this.a);
    const spB = (semiperimeter - this.b);
    const spC = (semiperimeter - this.c);

    return roundNumber(
      Math.sqrt(semiperimeter * spA * spB * spC),
    );
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    hasZeroSize(radius);
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    hasZeroSize(a, b);
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const {
    color,
    shape,
  } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
