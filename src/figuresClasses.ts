export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some variable is less or equal to zero');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= (a + b + c - longestSide)) {
      throw new Error('triangle sides disobey Heron\'s formula');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('radius is less or equal to zero');
    }
  }

  getArea(): number {
    return Math.floor((this.radius) ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(public color:Color, public width:number, public height:number) {
    if (width <= 0 || height <= 0) {
      throw new Error('some variable is less or equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
