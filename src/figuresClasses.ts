type Shapes = 'circle' | 'triangle' | 'rectangle';
type Colors = 'red' | 'green ' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect number');
    }

    const biggestSide = [a, b, c].reduce((ac, cu) => (ac > cu ? ac : cu));

    const smallestSides = [a, b, c]
      .filter((num) => num !== biggestSide)
      .reduce((acc, curr) => curr + acc, 0);

    if (smallestSides <= biggestSide) {
      throw new Error("this sides can't form a triangle");
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: Colors,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Incorrect radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.r, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Incorrect sides numbers');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
