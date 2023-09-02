function isTrianglePossible(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

export interface Figure {
  shape: string,
  color: string,
  getArea: Function,
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((number) => number <= 0)) {
      throw new Error("Sides of the triangle can't be equal or smaller than 0");
    }

    if (!isTrianglePossible(a, b, c)) {
      throw new Error("One side can't be greater than the sum of two others");
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) * 0.5;

    const area = (semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)
    ) ** 0.5;

    const areaToTwoNumbersAfterComma = Math.floor(area * 100) / 100;

    return areaToTwoNumbersAfterComma;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error("Radius can't be equal to or smaller than 0");
    }
  }

  getArea(): number {
    const area = this.radius ** 2 * Math.PI;

    const areaToTwoNumbersAfterComma = Math.floor(area * 100) / 100;

    return areaToTwoNumbersAfterComma;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error("Height and width can't be equal to or smaller than 0");
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    const areaToTwoNumbersAfterComma = Math.floor(area * 100) / 100;

    return areaToTwoNumbersAfterComma;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
