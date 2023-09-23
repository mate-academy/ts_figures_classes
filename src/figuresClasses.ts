type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  readonly shape: Shape;
  color: Color;
  getArea(): number;
}

function checkValidSides(sides: number[]): void {
  const invalidSides = sides.some((side) => side <= 0);

  if (invalidSides) {
    throw new Error('All sides should be greater than 0');
  }
}

function roundDown(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    checkValidSides([a, b, c]);

    const [sideA, sideB, sideC] = [a, b, c]
      .sort((x: number, y: number) => x - y);

    if (sideC >= sideA + sideB) {
      throw new Error(
        'The longest side of a triangle should be '
        + '>= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const square = (a + b + c) / 2;
    const area = Math.sqrt(square * (square - a) * (square - b) * (square - c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    checkValidSides([radius]);
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    checkValidSides([width, height]);
  }

  getArea(): number {
    const { width, height } = this;

    return roundDown(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
