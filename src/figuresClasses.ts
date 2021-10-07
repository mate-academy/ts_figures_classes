type Colors = 'red' | 'green' | 'blue';

type Shapes = 'triangle' | 'circle' | 'rectangle';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

const round = (n: number): number => Math.round(n * 100) / 100;

export class Triangle implements Figure {
  public shape: Shapes = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // eslint-disable-next-line max-len
    const error = `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides can\'t be negative');
    }

    if ((this.a + this.b) <= this.c
      || (this.b + this.c) <= this.a
      || (this.a + this.c) <= this.b) {
      throw new Error(error);
    }
  }

  getArea(): number {
    const p:number = (this.a + this.b + this.c) / 2;
    const s:number = Math.sqrt((p - this.a) * (p - this.b) * (p - this.c) * p);

    return round(s);
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('radius can\'t be negative');
    }
  }

  getArea(): number {
    return round(3.14 * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shape.Rectangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (this.a < 0 || this.b < 0) {
      throw new Error('sides can\'t be negative');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
