type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a === 0
        || this.b === 0
        || this.c === 0
        || this.a + this.b <= this.c
        || this.b + this.c <= this.a
        || this.c + this.a <= this.b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return Math.floor(
      100 * Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 1) {
      throw new Error(`radius ${radius} can't form the circle`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a < 1 || this.b < 1) {
      throw new Error(`sides ${this.a} and ${this.b} can't form the rectangle`);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(100 * area) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
