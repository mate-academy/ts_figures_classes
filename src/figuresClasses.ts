type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(
        `Width must be greater than 0, received ${width}`,
      );
    }

    if (height <= 0) {
      throw new Error(
        `Height must be greater than 0, received ${height}`,
      );
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Radius must be greater than 0, received ${radius}`,
      );
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(
        `Side a must be greater than 0, received ${a}`,
      );
    }

    if (b <= 0) {
      throw new Error(
        `Side b must be greater than 0, received ${b}`,
      );
    }

    if (c <= 0) {
      throw new Error(
        `Side c must be greater than 0, received ${c}`,
      );
    }

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error(
        `Sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  public getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
