export interface Figure {
  shape: string,
  color: string,
  getArea(): number;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const error = `Sides ${a}, ${b}, and ${c} must be greater than zero.`;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(error);
    }

    const longestSide = Math.max(a, b, c);
    const sumOtherTwo = (a + b + c) - longestSide;

    if (longestSide >= sumOtherTwo) {
      throw new Error(error);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const S = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    const error = 'throws an error';

    if (radius <= 0) {
      throw new Error(error);
    }
  }

  getArea(): number {
    const { radius: r } = this;
    const S = Math.PI * r ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const error = 'throws an error';

    if (width <= 0 || height <= 0) {
      throw new Error(error);
    }
  }

  getArea(): number {
    const { width, height } = this;
    const S = width * height;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
