export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    readonly color: string,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('any length is <= 0');
    }

    const longestSide = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longestSide;

    if (longestSide >= sumOfOthers) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    readonly color: string,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  public getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    readonly color: string,
    readonly height: number,
    readonly width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
