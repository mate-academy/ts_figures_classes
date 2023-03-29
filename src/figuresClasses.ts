export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  private longestSide: number;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The length of side(s) is less or equals 0');
    }

    this.longestSide = Math.max(this.a, this.b, this.c);

    if (this.longestSide >= this.a + this.b + this.c - this.longestSide) {
      throw new Error('The sum of shorter sides is lower than longest side');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The length of side(s) is less or equals 0');
    }
  }

  getArea(): number {
    return Math.trunc(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('The length of side(s) is less or equals 0');
    }
  }

  getArea(): number {
    return Math.trunc((this.width * this.heigth) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
