// import { threadId } from "worker_threads";

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const arrayOfSides = [this.a, this.b, this.c];
    /* eslint-disable */
    const longest = arrayOfSides.reduce((prev, side) => (prev < side ? side : prev), 0);

    const index = arrayOfSides.indexOf(longest);

    const sumOfTwoSides = arrayOfSides.filter((side) => (
      side !== arrayOfSides[index]))
      .reduce((prev, side) => prev + side, 0);

    if (arrayOfSides[index] >= sumOfTwoSides) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const beforeRoot2 = halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c);

    return +(Math.sqrt(beforeRoot2)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const squarCircle = Math.PI * this.radius **2;
    return Math.floor(squarCircle * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
