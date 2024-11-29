type Shapes = 'circle' | 'triangle' | 'rectangle';
type Colors = 'red' | 'green ' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

function checkOnError(errorMessage: string, ...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleErrorMessage = 'Triangle side length must be greater than 0';

    checkOnError(triangleErrorMessage, a, b, c);

    const biggestSide = Math.max(a, b, c);

    const smallestSides = [a, b, c]
      .filter((num) => num !== biggestSide)
      .reduce((acc, curr) => curr + acc, 0);

    if (smallestSides <= biggestSide) {
      throw new Error(
        'The sum of the lengths of any two sides' +
          'must be greater than the third side',
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    const circleErrorMessage = 'Circle radius must be greater than 0';

    checkOnError(circleErrorMessage, radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    const rectangleErrorMessage = 'Both rectangle sides must be greater than 0';

    checkOnError(rectangleErrorMessage, a, b);
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
