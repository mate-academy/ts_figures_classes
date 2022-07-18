function roundToHundredths(x: number): number {
  return Math.floor(100 * x) / 100;
}

function isTriangleSidesCorrect(
  sideA: number,
  sideB: number,
  sideC: number,
): boolean {
  const ascSideValues = [sideA, sideB, sideC].sort((a, b) => a - b);
  const allSidesArePositive = ascSideValues.every(
    (sideValue) => sideValue > 0,
  );
  const longestSide = ascSideValues[ascSideValues.length - 1];
  const sumOfOtherSideValues = ascSideValues.reduce(
    (prev, cur) => prev + cur,
  ) - longestSide;
  const isSidesValuesValid = longestSide < sumOfOtherSideValues;

  return isSidesValuesValid && allSidesArePositive;
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: string,
  getArea: Function,
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (!isTriangleSidesCorrect(sideA, sideB, sideC)) {
      throw new Error('Triangle sides are not valid');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;
    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - sideA)
      * (semiPerimeter - sideB)
      * (semiPerimeter - sideC));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of circle can not be equal to 0 or less');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and Height can not be equal to 0 or less',
      );
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
