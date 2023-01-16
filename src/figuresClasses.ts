function roundToNDecimalPlaces(num: number, decimalPlaces: number): number {
  const factorOfTen = 10 ** decimalPlaces;

  return Math.floor(num * factorOfTen) / factorOfTen;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  color: Color;

  readonly sides: [number, number, number];

  constructor(color: Color, ...sides: [number, number, number]) {
    if (!Triangle.isSidesValid(sides)) {
      throw new Error('Given triangle sides are not valid');
    }

    this.color = color;
    this.sides = sides;
  }

  getArea(): number {
    const semiPerimeter = this
      .sides
      .reduce((perimeter, side) => perimeter + side, 0) / 2;

    const differencesProduct = this
      .sides
      .reduce((product, sideLength) => {
        return product * (semiPerimeter - sideLength);
      }, 1);

    const area = Math.sqrt(semiPerimeter * differencesProduct);

    return roundToNDecimalPlaces(area, 2);
  }

  static isSidesValid(sides: [number, number, number]): boolean {
    if (Math.min(...sides) <= 0) {
      return false;
    }

    const perimeter = sides.reduce((sidesSum, side) => sidesSum + side, 0);
    const longestSide = Math.max(...sides);

    if (perimeter - longestSide <= longestSide) {
      return false;
    }

    return true;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('The radius is equal or less than zero');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundToNDecimalPlaces(area, 2);
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (Math.min(width, height) <= 0) {
      throw new Error('Rectangle sides are not valid');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToNDecimalPlaces(area, 2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
