type ShapeOfFigure = 'triangle' | 'circle' | 'rectangle';
type ColorOfFigure = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeOfFigure;
  color: ColorOfFigure;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeOfFigure = 'triangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(this.a, this.b, this.c) <= 0
    || [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[2]
    >= [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[0]
    + [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[1]) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    return Math.floor(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeOfFigure = 'circle';

  constructor(public color: ColorOfFigure, public r: number) {
    if (this.r <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeOfFigure = 'rectangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
