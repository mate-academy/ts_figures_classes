/* eslint-disable @typescript-eslint/explicit-function-return-type */
type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape:Shape
  color:Color;
  a: number;
  b?: number;
  c?:number;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape:Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || c >= a + b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea() {
    const s = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape:Shape = 'circle';

  constructor(
    public color:Color,
    public a:number,
  ) {
    if (a <= 0) {
      throw new Error(`radius ${a} can't form a circle`);
    }
  }

  getArea() {
    const area = (Math.PI * this.a ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`sides ${a} and ${b} can't form a rectangle`);
    }
  }

  getArea() {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
