export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  readonly shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const longestSide = Math.max(a, b, c);
    const sidesSum = a + b + c;
    const twoShortestSidesSum = sidesSum - longestSide;

    if (longestSide >= twoShortestSidesSum) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const exactArea = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(exactArea * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    const exactArea = Math.PI * this.radius ** 2;

    return Math.floor(exactArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
