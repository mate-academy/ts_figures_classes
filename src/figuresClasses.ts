export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: `triangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = `triangle`;

    const descSortedSides = [a, b, c].sort((first, second) => second - first);
    const isCorrectSides =
      descSortedSides[0] < descSortedSides[2] + descSortedSides[1];

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The Length must be greater than 0');
    }

    if (!isCorrectSides) {
      throw new Error(
        'The Longest side of a triangle must be less than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const SP = (a + b + c) / 2;
    const AREA = Math.sqrt(SP * (SP - a) * (SP - b) * (SP - c));

    return Math.floor(AREA * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: `circle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public radius: number,
  ) {
    this.shape = `circle`;

    if (radius <= 0) {
      throw new Error('The Radius must be greater than 0');
    }
  }

  getArea(): number {
    const Pi = Math.PI;
    const AREA = Pi * (this.radius * this.radius);

    return Math.floor(AREA * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: `rectangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    this.shape = `rectangle`;

    const isValidLength = width > 0 && height > 0;

    if (!isValidLength) {
      throw new Error('The Length must be greater than 0');
    }
  }

  getArea(): number {
    const AREA = this.width * this.height;

    return Math.floor(AREA * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
