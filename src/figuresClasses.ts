export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

const roundNumber = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const arrayOfNumbers = [a, b, c];
    const maxNumber = Math.max(...arrayOfNumbers);

    delete arrayOfNumbers[maxNumber];

    const sumOfSides = arrayOfNumbers[0] + arrayOfNumbers[1];

    if (a <= 0 || b <= 0 || c <= 0 || maxNumber >= sumOfSides) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) * 0.5;

    return roundNumber(+(Math.sqrt(
      semiPerim
      * (semiPerim - this.a)
      * (semiPerim - this.b)
      * (semiPerim - this.c),
    )).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(`Radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    return roundNumber(
      +(this.radius * this.radius * Math.PI).toFixed(3),
    );
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width ${width} and height ${height} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    return roundNumber(+(this.width * this.height).toFixed(2));
  }
}

export type MixedFigure = Circle | Rectangle | Triangle;

export function getInfo(figure: MixedFigure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
