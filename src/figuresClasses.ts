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
      throw new Error(
        `The sides of the triangle must be greater than 0`
      );
    }

    const longestSide = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longestSide;

    if (longestSide >= sumOfOthers) {
      throw new Error(
        `The longest side of a triangle must be less than the sum of the other two sides`,
      );
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimetr *
        (halfPerimetr - this.a) *
        (halfPerimetr - this.b) *
        (halfPerimetr - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `The radius must be greater than 0`
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
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
      throw new Error(
        `Width and height of the rectangle must be greater than 0`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
