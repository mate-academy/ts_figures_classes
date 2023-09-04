export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function roundToTwoDecimals(n: number): number {
  return Math.floor(n * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if ([sideA, sideB, sideC].some((side) => side <= 0)) {
      throw new Error('A side can\'t have length <= 0');
    }

    if (
      sideA >= (sideB + sideC)
      || sideB >= (sideA + sideC)
      || sideC >= (sideA + sideB)
    ) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;

    const semiperimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - sideA)
      * (semiperimeter - sideB)
      * (semiperimeter - sideC),
    );

    return roundToTwoDecimals(area);
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('A radius can\'t be <= 0');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return roundToTwoDecimals(area);
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('A side of rectangle can\'t be <= 0');
    }
  }

  getArea(): number {
    const area = this.sideA * this.sideB;

    return roundToTwoDecimals(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
