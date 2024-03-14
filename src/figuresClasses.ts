export interface Figure {
  shape: string;
  color: string;

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid values');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Invalid side of a triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;

    const area: number = (a + b + c) / 2;

    const result: number = +Math.sqrt(
      area * (area - this.a) * (area - this.b) * (area - this.c),
    ).toFixed(2);

    return result;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid values');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const result: string = (Math.PI * Math.pow(this.radius, 2)).toFixed(3);

    return +result.slice(0, result.length - 1);
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public length: number,
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('Pass invalid values ');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.length;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
