// import { NamedTupleMember } from "typescript";

type Color = 'red' | 'blue' | 'green';
type Shape = 'rectangle' | 'circle' | 'triangle';

function round(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number | never;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide: number = Math.max(this.a, this.b, this.c);
    const shortSides = [a, b, c].filter((side) => side !== longestSide);

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || longestSide >= shortSides[0] + shortSides[1]
    ) {
      throw new Error('error');
    }
  }

  shape: Shape = 'triangle';

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const area = (s * (s - this.a)
    * (s - this.b) * (s - this.c))
    ** 0.5;

    return round(area);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('error');
    }
  }

  shape: Shape = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return round(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('error');
    }
  }

  shape: Shape = 'rectangle';

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
