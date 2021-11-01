type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  sizes: number[];

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.sizes = [a, b, c].sort((first, second) => first - second);

    const maxValue = this.sizes[2];
    const restValuesSummary = this.sizes[0] + this.sizes[1];
    const isCorrectTriangle = maxValue < restValuesSummary;
    const isCorrectLengthOfSides = this.sizes.every((side) => side > 0);

    if (!isCorrectTriangle || !isCorrectLengthOfSides) {
      throw new Error('Wrong sides value');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (!(radius > 0)) {
      throw new Error('Wrong radius value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    const isCorrectLengthOfSides = width > 0 && height > 0;

    if (!isCorrectLengthOfSides) {
      throw new Error('Wrong sides value');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
