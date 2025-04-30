/* eslint-disable no-useless-constructor */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number | Error;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    const sides = [this.a, this.b, this.c].sort(
      (side1, side2) => side2 - side1,
    );
    const longestSide = sides.shift();

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Wrong sides value.');
    } else if (longestSide >= sides[0] + sides[1]) {
      throw new Error('Wrong sides value.');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) * 0.5;

    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Wrong radius value');
    }
  }

  getArea(): number {
    return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Wrong sides value.');
    }
  }

  getArea(): number | Error {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
