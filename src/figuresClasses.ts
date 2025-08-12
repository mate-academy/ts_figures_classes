export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side a must be greater than 0`);
    }

    if (b <= 0) {
      throw new Error(`Side b must be greater than 0`);
    }

    if (c <= 0) {
      throw new Error(`Side c must be greater than 0`);
    }

    const maxSide = Math.max(a, b, c);
    const sumWithoutMax = a + b + c - maxSide;

    if (maxSide >= sumWithoutMax) {
      throw new Error(
        `Sides a=${a}, b=${b}, c=${c} can't form a valid triangle`,
      );
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0`);
    }
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(`Width must be greater than 0`);
    }

    if (height <= 0) {
      throw new Error(`Height must be greater than 0`);
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
