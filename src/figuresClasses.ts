export type FigureColor = 'red' | 'green' | 'blue';
export type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  color: FigureColor;

  a: number;

  b: number;

  c: number;

  constructor(col: FigureColor, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c
      || b + c <= a
      || a + c <= b
    ) {
      throw new Error('incorrect triangle side sizes');
    }

    this.color = col;
    this.a = a;
    this.b = b;
    this.c = c;
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
  shape: FigureShape = 'circle';

  color: FigureColor;

  radius: number;

  constructor(color: FigureColor, radius: number) {
    if (radius <= 0) {
      throw new Error('incorrect circle radius');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  color: FigureColor;

  a: number;

  b: number;

  constructor(color: FigureColor, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('incorrect rectangle sides sizes');
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
