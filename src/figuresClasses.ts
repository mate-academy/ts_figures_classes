export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

function cutDigits(num: number): number {
  return Math.trunc(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('Invalid side length');
    }

    const longestSide: number = Math.max(a, b, c);
    const summOfSmallSides: number = (a + b + c) - longestSide;

    if (longestSide >= summOfSmallSides) {
      throw new Error('This sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = (a + b + c) / 2;
    const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return cutDigits(area);
  }
}

export class Circle {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = (Math.PI * radius ** 2);

    return cutDigits(area);
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
