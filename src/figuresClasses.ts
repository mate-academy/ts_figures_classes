type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

function validatePositive(values: number[]): void {
  if (values.some((value) => value <= 0)) {
    throw new Error('All lengths must be positive');
  }
}

function roundDown(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape = 'triangle' as const;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = this.sides;

    validatePositive(sides);

    const longestSide = Math.max(...sides);
    const otherSidesSum =
      sides.reduce((sum, side) => sum + side, 0) - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error('The sides cannot form a triangle');
    }
  }

  get sides(): number[] {
    return [this.a, this.b, this.c];
  }

  getArea(): number {
    const semiperimeter = this.sides.reduce((sum, side) => sum + side, 0) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.sides[0]) *
        (semiperimeter - this.sides[1]) *
        (semiperimeter - this.sides[2]),
    );

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape = 'circle' as const;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validatePositive([radius]);
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle' as const;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const sides = this.sides;

    validatePositive(sides);
  }

  get sides(): number[] {
    return [this.width, this.height];
  }

  getArea(): number {
    return roundDown(this.sides[0] * this.sides[1]);
  }
}

type FigureType = Triangle | Circle | Rectangle;

export function getInfo(figure: FigureType): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
