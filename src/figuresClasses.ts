export interface Figure {
  shape: string,
  color: string,
  getArea: Function,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one of the sides is <= 0');
    }

    const sortedSides = [a, b, c].sort((
      firstSide, secondSide,
    ) => secondSide - firstSide);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = 1 / 2 * (this.a + this.b + this.c);
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
