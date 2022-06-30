export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const list = [a, b, c].sort((x, y) => y - x);

    switch (true) {
      case a <= 0:
      case b <= 0:
      case c <= 0:
      case list[0] >= list[1] + list[2]:
        throw new Error('your error message');
      default:
        break;
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

    return Number(S.toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return +(Math.PI * this.radius ** 2).toFixed(3).slice(0, -1);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    switch (true) {
      case a <= 0:
      case b <= 0:
        throw new Error('your error message');
      default:
        break;
    }
  }

  getArea(): number {
    return +(this.a * this.b).toFixed(3).slice(0, -1);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
