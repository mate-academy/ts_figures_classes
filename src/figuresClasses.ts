export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function isTriangleOk(a: number, b: number, c: number): boolean {
  const longestSide = Math.max(a, b, c);
  let isOk: boolean;

  switch (longestSide) {
    case a:
      isOk = longestSide < (b + c);
      break;

    case b:
      isOk = longestSide < (a + c);
      break;

    case c:
      isOk = longestSide < (a + b);
      break;

    default:
      isOk = false;
      break;
  }

  return isOk;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || !isTriangleOk(a, b, c)) {
      throw new Error('Wrong side length!');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;

    return Math.floor((Math.sqrt(
      semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c),
    )) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong radius!');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong side length!');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
