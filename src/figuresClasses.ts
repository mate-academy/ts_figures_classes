type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

function roundDown(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = `triangle`;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be greater than 0');
    }

    const sortedSides: number[] = [a, b, c].sort(
      (side1: number, side2: number) => side2 - side1,
    );

    const sumOfTwoSide: number = sortedSides[1] + sortedSides[2];

    if (sortedSides[0] >= sumOfTwoSide) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = `circle`;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = `rectangle`;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
