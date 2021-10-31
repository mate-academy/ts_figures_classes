export interface Figure {
  shape: string;
  color: string;
  sizes: number[];

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string;

  sizes: number[];

  constructor(
    public color: string,
    ...args: number[]
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.sizes = args.sort((a, b) => a - b);

    const maxValue = this.sizes[2];
    const restValuesSummary = this.sizes[0] + this.sizes[1];
    const isCorrectTriangle = maxValue < restValuesSummary;
    const isCorrectLengthOfSides = this.sizes.every((side) => side > 0);

    if (!isCorrectTriangle || !isCorrectLengthOfSides) {
      throw new Error('Wrong sides value');
    }
  }

  getArea(): number {
    const a = this.sizes[0];
    const b = this.sizes[1];
    const c = this.sizes[2];
    const semiPerimetr = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - a)
      * (semiPerimetr - b)
      * (semiPerimetr - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string;

  sizes: number[];

  constructor(
    public color: string,
    ...args: number[]
  ) {
    this.shape = 'circle';
    this.color = color;
    this.sizes = args;

    if (!(this.sizes[0] > 0)) {
      throw new Error('Wrong radius value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.sizes[0] ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string;

  sizes: number[];

  constructor(
    public color:string,
    ...args: number[]
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.sizes = args;

    const isCorrectLengthOfSides = this.sizes.every((side) => side > 0);

    if (!isCorrectLengthOfSides) {
      throw new Error('Wrong sides value');
    }
  }

  getArea(): number {
    const area = this.sizes[0] * this.sizes[1];

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
