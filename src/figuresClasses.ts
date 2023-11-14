export interface Figure {
  shape: string;
  color: string;
  getArea(): number | Error;
}

type Shape = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  static p: number;

  static longest: number;

  constructor(
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    Triangle.p = this.a + this.b + this.c;
    Triangle.longest = Math.max(this.a, this.b, this.c);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('can not form a triangle');
    }

    if (Triangle.longest >= Triangle.p - Triangle.longest) {
      throw new Error('can not form a triangle');
    }
  }

  getArea(): number | Error {
    const semiP = Triangle.p / 2;

    const square = Math
      .sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: string;

  radius: number;

  constructor(
    color: string,
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error("can't form a circle");
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error("can't form a rectangle");
    }
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
