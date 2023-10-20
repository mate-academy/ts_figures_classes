type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundValue(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const isLessthenOne = sideA <= 0 || sideB <= 0 || sideC <= 0;
    const isUnvalidSideA = sideA >= sideB + sideC;
    const isUnvalidSideB = sideB >= sideA + sideC;
    const isUnvalidSideC = sideC >= sideA + sideB;

    if (isLessthenOne || isUnvalidSideA || isUnvalidSideB || isUnvalidSideC) {
      throw new Error('Some of the values is not valid');
    }
  }

  getArea(): number {
    const square = (this.sideA + this.sideB + this.sideC) / 2;
    const result = Math.sqrt(
      square * (
        (square - this.sideA) * (square - this.sideB) * (square - this.sideC)
      ),
    );

    return roundValue(result);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public raduis: number,
  ) {
    const isRadiusInvalid = raduis <= 0;

    if (isRadiusInvalid) {
      throw new Error('The value is not valid');
    }
  }

  getArea(): number {
    const result = this.raduis * this.raduis * Math.PI;

    return roundValue(result);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    const isLessthenOne = sideA <= 0 || sideB <= 0;

    if (isLessthenOne) {
      throw new Error('Some of the values is not valid');
    }
  }

  getArea(): number {
    const result = this.sideA * this.sideB;

    return roundValue(result);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
