function isTrianglePossible(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

function roundDownFloat(number: number, amountOfDecimals: number = 2): number {
  return Math.floor(number * 10 ** amountOfDecimals) / 10 ** amountOfDecimals;
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

    return roundDownFloat(area);
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

    return roundDownFloat(area);
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

    return roundDownFloat(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
