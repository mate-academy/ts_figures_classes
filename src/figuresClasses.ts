type ShapeOfFigure = 'triangle' | 'circle' | 'rectangle';
type ColorOfFigure = 'red' | 'green' | 'blue';

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

function sideSmallerZeroError(side: number, shape: ShapeOfFigure): void {
  if (side <= 0) {
    switch (shape) {
      case 'circle':
        throw new Error(`It’s even hard for me to imagine
        what kind of triangle this should be.
        I'm not a quantum computer, can I have a normal triangle?`);

      case 'rectangle':
        throw new Error(`It’s even hard for me to imagine
        what kind of triangle this should be.
        I'm not a quantum computer, can I have a normal triangle?`);

      default:
    }
  }
}

function longestSideOfTriangleBiggerError(sides: number[]): void {
  if (sides.sort((prev, cur) => prev - cur)[2]
    >= sides.sort((prev, cur) => prev - cur)[0]
    + sides.sort((prev, cur) => prev - cur)[1]) {
    throw new Error(`It’s even hard for me to imagine
    what kind of triangle this should be.
    I'm not a quantum computer, can I have a normal triangle?`);
  }
}

export interface Figure {
  shape: ShapeOfFigure;
  color: ColorOfFigure;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeOfFigure = 'triangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    sideSmallerZeroError(Math.min(this.a, this.b, this.c), this.shape);
    longestSideOfTriangleBiggerError([this.a, this.b, this.c]);
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    return roundDownToHundredths(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)),
    );
  }
}

export class Circle implements Figure {
  shape: ShapeOfFigure = 'circle';

  constructor(
    public color: ColorOfFigure,
    public r: number,
  ) {
    sideSmallerZeroError(this.r, this.shape);
  }

  getArea(): number {
    return roundDownToHundredths(Math.PI * (this.r ** 2));
  }
}

export class Rectangle implements Figure {
  shape: ShapeOfFigure = 'rectangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
  ) {
    sideSmallerZeroError(Math.min(this.a, this.b), this.shape);
  }

  getArea(): number {
    return roundDownToHundredths(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
