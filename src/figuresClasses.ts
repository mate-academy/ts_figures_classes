/* eslint-disable no-useless-constructor */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('Triangle side cannot be zero!');
    }

    const longestSide = Math.max(this.a, this.b, this.c);
    const sumOfOthers = this.a + this.b + this.c - longestSide;

    if (longestSide >= sumOfOthers) {
      throw new Error('This is not a triangle!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius of a circle cannot be zero!');
    }
  }

  getArea(): number {
    // eslint-disable-next-line prettier/prettier
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or height of a rectangle cannot be zero!');
    }
  }

  getArea(): number {
    // eslint-disable-next-line prettier/prettier
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
