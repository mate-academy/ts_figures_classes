type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('not correct sides');
    }

    const biggestSide = Math.max(a, b, c);
    const perimeter = a + b + c;

    if (biggestSide >= (perimeter - biggestSide)) {
      throw new Error('not a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semi = (a + b + c) / 2;
    const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (radius <= 0) {
      throw new Error('not correct radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = Math.PI * radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('not correct sides');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
