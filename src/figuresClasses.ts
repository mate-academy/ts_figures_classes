// import { threadId } from "worker_threads";

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

function getRoundedNumber(value: number): number {
  return Math.floor(value * 100) / 100;
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
      throw new Error('Triangle should has side bigger than 0');
    }

    const arrayOfSides = [this.a, this.b, this.c];
    const sortedArrayOfSides = arrayOfSides.sort(
      (side1, side2) => side2 - side1,
    );
    const sumOfTwoSides = sortedArrayOfSides[1] + sortedArrayOfSides[2];

    if (sortedArrayOfSides[0] >= sumOfTwoSides) {
      throw new Error('Longest side ghould be less than sum of another');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    /* eslint-disable */
    const preparedNumber = halfOfPerimeter * (halfOfPerimeter - this.a) * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c);

    return getRoundedNumber(Math.sqrt(preparedNumber));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Circle can\'t has radius less than 1');
    }
  }

  getArea(): number {
    const squarCircle = Math.PI * this.radius ** 2;

    return getRoundedNumber(squarCircle);
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
      throw new Error('rectangle can\'t has side less than 1');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.width * this.height;

    return getRoundedNumber(areaOfRectangle);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
