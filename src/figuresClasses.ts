type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
    public trianglePerimeter: number = a + b + c,
  ) {
    const longestSide: number = Math.max(a, b, c);
    const shortestSide: number = Math.min(a, b, c);
    const otherSide: number = trianglePerimeter - longestSide - shortestSide;
    const allSidesPositive: boolean =
      longestSide >= 0 && shortestSide >= 0 && otherSide >= 0;

    if (longestSide >= shortestSide + otherSide && allSidesPositive) {
      throw new Error(`sides ${a}, ${b}, and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p: number = this.trianglePerimeter / 2;

    return Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`radius that equals to ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
