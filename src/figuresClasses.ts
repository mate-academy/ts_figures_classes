export interface Figure {
  shape: string;
  color: string;
  getArea(): number | Error;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(
    shape: string,
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = shape;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number | Error {
    const sideA = this.a;
    const sideB = this.b;
    const sideC = this.c;
    const p = sideA + sideB + sideC;
    const semiP = p / 2;
    const longestSide = Math.max(sideA, sideB, sideC);

    if ((sideA * sideB * sideC <= 0) || (p - longestSide) <= 0) {
      return new Error("can't form a triangle");
    }

    const square = Math
      .sqrt(semiP * (semiP - sideA) * (semiP - sideB) * (semiP - sideC));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(
    shape: string,
    color: string,
    radius: number,
  ) {
    this.shape = shape;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(
    shape: string,
    color: string,
    width: number,
    height: number,
  ) {
    this.shape = shape;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number | Error {
    if (this.width * this.height <= 0) {
      return new Error("can't form a rectangle");
    }

    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
