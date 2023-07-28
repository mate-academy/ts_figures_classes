type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const ROUNDE_TO: number = 100;

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundValueTo(value: number, roundTo: number): number {
  return Math.floor(value * roundTo) / roundTo;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if ((this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0)) {
      throw new Error('Invalid sides. Values should be greater than zero');
    }

    const longestSide: number = Math.max(this.sideA, this.sideB, this.sideC);

    if (longestSide >= (this.sideA + this.sideB + this.sideC) - longestSide) {
      throw new Error('The longest side of a triangle must be less'
        + ' than a sum of two others');
    }
  }

  getArea(): number {
    const square: number = (this.sideA + this.sideB + this.sideC) / 2;
    const area: number = Math.sqrt(square * (square - this.sideA)
      * (square - this.sideB) * (square - this.sideC));

    return roundValueTo(area, ROUNDE_TO);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid radius. Value should be greater than zero');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundValueTo(area, ROUNDE_TO);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid sides. Values should be greater than zero');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundValueTo(area, ROUNDE_TO);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
