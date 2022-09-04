type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function badTriangle(
  side1: number,
  side2: number,
  side3: number,
): boolean {
  const largest: number = Math.max(side1, side2, side3);

  return (side1 + side2 + side3) - largest <= largest;
}

function errorChecker(...args: number[]): boolean {
  return args.some((arg : number) => arg <= 0);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (errorChecker(a, b, c)) {
      throw new Error('Triangle sides should be greater than 0');
    }

    if (badTriangle(a, b, c)) {
      throw new Error(
        'It is impossible to get a triangle. One side is too long',
      );
    }
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiPerimetr * (
      semiPerimetr - this.a
    ) * (semiPerimetr - this.b) * (semiPerimetr - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (errorChecker(radius)) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public high: number,
  ) {
    if (errorChecker(high, width)) {
      throw new Error('Width and high must be greater than zero');
    }
  }

  getArea(): number {
    return this.high * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
