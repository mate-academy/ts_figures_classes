type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid parameters');
    }

    const max = Math.max(a, b, c);
    const otherNumsSum: number = [a, b, c].filter((el: number) => el !== max)
      .reduce((sum: number, n: number) => sum + n);

    if (max >= otherNumsSum) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    // eslint-disable-next-line max-len
    const area = Math.sqrt(semi * (semi - this.a) * (semi - this.b) * (semi - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
