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
    public firstSide: number,
    public secondSide: number,
    public thirdSide: number,
  ) {
    const biggestSide: number = Math.max(firstSide, secondSide, thirdSide);
    const otherSidesSum: number = [firstSide, secondSide, thirdSide]
      .filter((side) => side !== biggestSide)
      .reduce((acc, side) => acc + side);

    if (firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {
      throw new Error('all sides must be positive');
    }

    if (biggestSide >= otherSidesSum) {
      throw new Error('this sides cannot form a triangle');
    }
  }

  getArea(): number {
    const { firstSide, secondSide, thirdSide } = this;

    const semiPer: number = (firstSide + secondSide + thirdSide) / 2;

    const area: number = Math.sqrt(
      semiPer *
        (semiPer - firstSide) *
        (semiPer - secondSide) *
        (semiPer - thirdSide),
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
      throw new Error('radius must be positive');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area: number = Math.PI * radius * radius;

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
      throw new Error('width and height must be positive');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area: number = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
