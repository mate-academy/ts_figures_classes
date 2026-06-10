enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    const p = a + b + c;
    const pWithoutMaxSide = p - maxSide;
    const invalidTriangleSides = maxSide >= pWithoutMaxSide;

    const invalidSides =
      [this.a, this.b, this.c].filter((s) => s <= 0).length > 0;

    if (invalidTriangleSides || invalidSides) {
      throw new Error('Invalid parameter');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid parameter');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Invalid parameter');
    }
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
