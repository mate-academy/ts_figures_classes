export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArr = [a, b, c].sort((a1, a2) => a1 - a2);

    if (
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      sidesArr[2] >= sidesArr[0] + sidesArr[1]
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const sArea = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      sArea * (sArea - this.a) * (sArea - this.b) * (sArea - this.c),
    );

    return Math.floor(area * 100) / 100;
    // doesn't work with toFixed(2) for rounding the circle's area
    // (113, 1 vs 113,09 expected)
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
