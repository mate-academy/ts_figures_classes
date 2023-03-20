// import { type } from "os";

type Shape = 'rectangle' | 'triangle' | 'circle';
type Color = 'blue' | 'red' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const perimeter = a + b + c;
    const LongestSide = Math.max(...sides);
    const hasTooBigSide = LongestSide >= perimeter - LongestSide;
    const hasNegativeSide = [...sides].some((el: number) => el <= 0);

    if (hasNegativeSide) {
      throw new Error('Length of each sides should be a positive number');
    }

    if (hasTooBigSide) {
      throw new Error('The shape is not a triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor((
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    ) * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius should be a positive number');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('All rectangle sides should be a positive numbers');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
