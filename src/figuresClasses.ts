/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable no-useless-constructor */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,

    public a: number,

    public b: number,

    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides must be > 0');
    }

    const longestSide: number = Math.max(this.a, this.b, this.c);
    const sumOfSides: number = this.a + this.b + this.c;

    if (longestSide >= sumOfSides - longestSide) {
      throw new Error("sides 1, 2 and 3 can't form a Triangle");
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiperimeter *
            (semiperimeter - this.a) *
            (semiperimeter - this.b) *
            (semiperimeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,

    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,

    public width: number,

    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width and height must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
