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

function validateLengthes(...lengthes: number[]): void {
  const maxSide = Math.max(...lengthes);
  const sidesSum = lengthes.reduce((a, b) => a + b, 0);
  const hasNullSize = lengthes.some((number) => number <= 0);
  const hasImpossibleSize = maxSide >= sidesSum - maxSide;

  if (hasNullSize || (lengthes.length === 3 && hasImpossibleSize)) {
    throw new Error('impossible sides of figure');
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
    validateLengthes(a, b, c);
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
    validateLengthes(this.radius);
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
    validateLengthes(a, b);
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
