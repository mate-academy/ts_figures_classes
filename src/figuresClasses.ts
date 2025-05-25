type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sum = a + b + c - longestSide;

    if (a <= 0 || b <= 0 || c <= 0 || longestSide >= sum) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public shape: Shape = 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} is invalid`);
    }
  }

  public shape: Shape = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides are invalid`);
    }
  }

  public shape: Shape = 'rectangle';

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
