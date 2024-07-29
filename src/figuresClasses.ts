import { roundedDown } from './utility/roundedDown';

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => {};
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("sides can't have zero length");
    }

    const longestSide = Math.max(a, b, c);
    const perimeter = a + b + c;

    if (longestSide >= perimeter - longestSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );

    return roundedDown(square);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error("radius can't have zero length");
    }
  }

  public getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return roundedDown(square);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error("sides can't have zero length");
    }
  }

  public getArea(): number {
    const square = this.a * this.b;

    return roundedDown(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
