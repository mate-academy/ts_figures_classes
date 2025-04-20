type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

const round = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of a side cannot be <= 0');
    }

    const sortedSides = [a, b, c].sort(
      (side1: number, side2: number) => side1 - side2,
    );

    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      throw new Error(
        'The longest side of a triangle cannot be >= than a sum of two others',
      );
    }
  }

  getArea = (): number => {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return round(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c),
      ),
    );
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public r: number,
    public shape: Shape = 'circle',
  ) {
    if (r <= 0) {
      throw new Error('Radius of a circle cannot be <= 0');
    }
  }

  getArea = (): number => {
    return round(Math.PI * this.r ** 2);
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Length of a side cannot be <= 0');
    }
  }

  getArea = (): number => {
    return round(this.a * this.b);
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
