export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = this.constructor.name.toLowerCase();

    if (this.a + this.b <= this.c
        || this.a + this.c <= this.b
        || this.b + this.c <= this.a
        || [this.a, this.b, this.c].some((side: number) => side <= 0)) {
      throw new Error(`This figure is not ${this.shape}`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math
      .round(Math
        .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = this.constructor.name.toLowerCase();

    if (this.radius <= 0) {
      throw new Error(`This figure is not ${this.shape}`);
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public width: number,
    public hight: number,
  ) {
    this.shape = this.constructor.name.toLowerCase();

    if ([this.width, this.hight].some((side: number) => side <= 0)) {
      throw new Error(`This figure is not ${this.shape}`);
    }
  }

  getArea(): number {
    return Math.round(this.width * this.hight * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape}`
  + ` - ${figure.getArea()}`;
}
