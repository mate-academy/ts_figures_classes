export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of some value is less than or equal to 0');
    }

    const arrSides = [a, b, c].sort((one: number, two: number) => two - one);
    const maxSide = arrSides[0];
    const sumSides = arrSides[1] + arrSides[2];

    if (maxSide >= sumSides) {
      throw new Error(`${maxSide} of triangle >= than a sum of two others`);
    }

    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      2,
    );
  }
}
export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length of radius is less than or equal to 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.pow(this.radius, 2) * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of some value is less than or equal to 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
