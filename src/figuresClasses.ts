enum ShapeFigure {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type ColorFigure = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeFigure;
  color: ColorFigure;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = ShapeFigure.triangle;

  constructor(
    public color: ColorFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (
      this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a
    ) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = ShapeFigure.circle;

  constructor(public color: ColorFigure, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.radius ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = ShapeFigure.rectangle;

  constructor(
    public color: ColorFigure,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
