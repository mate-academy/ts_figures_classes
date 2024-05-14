export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const errorMessage = 'your error message';

    const isAllPositive = this.a >= 0 || this.b >= 0 || this.c >= 0;
    const isCmoreThanAB = this.a + this.b <= this.c;
    const isBmoreThanAC = this.a + this.c <= this.b;
    const isAmoreThanCB = this.b + this.c <= this.a;

    if (!isAllPositive || isAmoreThanCB || isBmoreThanAC || isCmoreThanAB) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          halfPerimetr *
            (halfPerimetr - this.a) *
            (halfPerimetr - this.b) *
            (halfPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p2 = this.radius ** 2;

    return Math.floor(Math.PI * p2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
