/* eslint-disable no-useless-constructor */
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

function numberRound(x: number): number {
  return Math.floor(x * 100) / 100;
}

export enum Shape {
  Triangle = 'TRIANGLE',
  Circle = 'CIRCLE',
  Rectangle = 'RECTANGLE',

}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((x: number) => x <= 0)
      || Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('the entered data is incorrect');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return numberRound(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the entered data is incorrect');
    }
  }

  getArea(): number {
    return numberRound(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('the entered data is incorrect');
    }
  }

  getArea(): number {
    return numberRound(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const shape = figure.shape.toLocaleLowerCase();

  return `A ${figure.color} ${shape} - ${figure.getArea()}`;
}
