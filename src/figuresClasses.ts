type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('values is less than 1');
    }

    const longestSide = Math.max(this.a, this.b, this.c);
    const perimetr = this.a + this.b + this.c;

    if (longestSide >= perimetr - longestSide) {
      throw new Error(
        'longest side of a triangle is bigger than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('values is less than 1');
    }
  }

  getArea(): number {
    const S = Math.PI * this.radius ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('values is less than 1');
    }
  }

  getArea(): number {
    const S = this.width * this.height;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
