export interface Figure {
  color: string,
  a?: number,
  b?: number,
  c?: number,
  r?: number,
  shape?: string,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape?: string,
  ) {
    this.shape = 'triangle';

    if (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
    ) {
      throw new Error('Put a correct side length');
    }

    if (
      a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)
    ) {
      throw new Error(`Sides ${a}, ${b} and ${c}\
 can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public r: number,
    public shape?: string,
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('Put a correct radius length');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r ** 2) * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public shape?: string,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Put a correct side length');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
