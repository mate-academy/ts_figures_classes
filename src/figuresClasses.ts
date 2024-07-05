enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundToTwoDecimals(value: number): number {
  return Math.floor(value * 100) / 100;
}

function isNegative(numbers: number[], errorMessage: string): void {
  if (numbers.some((el) => el <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSmallerSides = [a, b, c]
      .filter((num) => num !== Math.max(a, b, c))
      .reduce((cur, next) => cur + next, 0);

    if (Math.max(a, b, c) >= triangleSmallerSides) {
      throw new Error(
        'Longest side of a triangle must be less than sum of other two sides',
      );
    }

    isNegative([a, b, c], 'Triangle sides must be greater than zero');
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return roundToTwoDecimals(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    isNegative([radius], 'Triangle sides must be greater than zero');
  }

  getArea(): number {
    const area: number = this.radius ** 2 * Math.PI;

    return roundToTwoDecimals(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    isNegative([width, height], 'Triangle sides must be greater than zero');
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundToTwoDecimals(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
