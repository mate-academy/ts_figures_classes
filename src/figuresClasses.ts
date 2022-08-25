type Color = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

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
  return (side1 + side2) <= side3
    || (side1 + side3) <= side2
    || (side2 + side3) <= side1;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
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
  shape: Shapes = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public high: number,
  ) {
    if (width <= 0 || high <= 0) {
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
