/* eslint-disable no-useless-constructor */

export enum ShapeFigure {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export type ColorFigure = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeFigure;
  color: ColorFigure;

  getArea():number;

}

export class Triangle {
  shape: ShapeFigure = ShapeFigure.triangle;

  constructor(
    public color: ColorFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('y throws an error');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error(
        'throws an error: sides 1, 2 and 3 can\'t form a triangle',
      );
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);

    return +(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: ShapeFigure = ShapeFigure.circle;

  constructor(
    public color: ColorFigure,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('y throws an error');
    }
  }

  getArea(): number {
    return (Math.floor((Math.PI * this.radius * this.radius) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: ShapeFigure = ShapeFigure.rectangle;

  constructor(
    public color: ColorFigure,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('y throws an error');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure:Figure):string | number {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
