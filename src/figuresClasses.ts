type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const longestSide = Math.max(sideA, sideB, sideC);
    const sumOfShorterSides = sideA + sideB + sideC - longestSide;

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Invalid side length');
    }

    if (longestSide >= sumOfShorterSides) {
      throw new Error('This sides can not form a triangle');
    }
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.sideA + this.sideB + this.sideC);
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.sideA) *
        (semiperimeter - this.sideB) *
        (semiperimeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius length');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
