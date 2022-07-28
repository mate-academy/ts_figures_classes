export enum FigureColor {
  red = 'red',
  green ='green',
  blue = 'blue'
}
export enum FigureShape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureShape.triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c
      || b + c <= a
      || a + c <= b
    ) {
      throw new Error('incorrect triangle side sizes');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      halfPerimeter * (halfPerimeter - this.a)
       * (halfPerimeter - this.b)
       * (halfPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = FigureShape.circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('incorrect circle radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureShape.rectangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('incorrect rectangle sides sizes');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
