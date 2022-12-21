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
    this.shape = 'triangle';

    if (this.a >= this.b + this.c) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    if (this.b >= this.a + this.c) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    if (this.c >= this.b + this.a) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const square
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100;

    return Math.floor(square) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
  ) {
    this.shape = 'circle';

    if (this.a <= 0) {
      throw new Error("Can't form a Circle");
    }
  }

  getArea(): number {
    const square = 100 * (Math.PI * (this.a * this.a));

    return Math.floor(+square) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (this.a <= 0 || this.b <= 0) {
      throw new Error("Can't form a Rectangle");
    }
  }

  getArea(): number {
    const square = this.a * this.b;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
