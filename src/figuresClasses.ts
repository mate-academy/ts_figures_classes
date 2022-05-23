// import { futimes } from "fs";

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

function error(...args: number[]): void {
  if (args.some((param: number) => param <= 0)) {
    throw new Error(`Enter valid ${args}`);
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    error(a, b, c);

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error('Enter valid sides');
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(halfPerimetr * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    error(radius);
  }

  getArea(): number {
    return round((Math.PI * this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    error(width, height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
