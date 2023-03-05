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

export class Triangle implements Figure {
  shape = Shape.Triangle;

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
    const p = (this.a + this.b + this.c) / 2;
    const pA = (p - this.a);
    const pB = (p - this.b);
    const pC = (p - this.c);

    return Math.floor(Math.sqrt(p * pA * pB * pC) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

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
  shape = Shape.Rectangle;

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
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
