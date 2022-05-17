enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'grean' | 'blue';

function rounding(n: number): number {
  return Math.floor(n * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (this.shape !== 'triangle') {
      throw new Error('There is missing dimention.');
    }

    if ([a, b, c].some((el) => el <= 0)) {
      throw new Error('There is missing dimention.');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('There is incorrect dimention.');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s
      * (s - this.a)
      * (s - this.b)
      * (s - this.c));

    return rounding(result);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    protected r: number,
  ) {
    if (r <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea():number {
    return rounding(Math.PI * (this.r ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    protected w: number,
    protected h: number,
  ) {
    if (w <= 0 || h <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea():number {
    return rounding(this.w * this.h);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
