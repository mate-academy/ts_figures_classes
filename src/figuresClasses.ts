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
    switch (true) {
      case (a <= 0):
      case (b <= 0):
      case (c <= 0):
      case (a >= b + c):
      case (b >= a + c):
      case (c >= a + b):
        throw new Error('Invalid sides are passed');
      default:
        break;
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(halfP
      * (halfP - this.a)
      * (halfP - this.b)
      * (halfP - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    switch (true) {
      case (r <= 0):
        throw new Error('Invalid radius is passed');
      default:
        break;
    }
  }

  getArea(): number {
    const square = Math.PI * this.r * this.r;

    // return square;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    switch (true) {
      case (a <= 0):
      case (b <= 0):
        throw new Error('Invalid sides are passed');
      default:
        break;
    }
  }

  getArea(): number {
    const square = this.a * this.b;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
