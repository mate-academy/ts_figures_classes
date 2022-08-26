type Color = 'red' | 'green' | 'blue';
enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

function isBadTriangle(
  side1: number,
  side2: number,
  side3: number,
): boolean {
  const largest: number = Math.max(side1, side2, side3);

  return (side1 + side2 + side3) - largest <= largest;
}

function errorParameter(...args: number[]): boolean {
  return args.some((arg : number) => arg <= 0);
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (errorParameter(a, b, c)) {
      throw new Error('Sides must be greater than zero');
    }

    if (isBadTriangle(a, b, c)) {
      throw new Error('The longest side is >= than a sum of two others');
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
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (errorParameter(radius)) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public high: number,
  ) {
    if (errorParameter(high, width)) {
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
