type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: Color,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const longestSide = Math.max(this.a, this.b, this.c);
    const sumOfOther = a + b + c - longestSide;

    if (longestSide > sumOfOther) {
      throw new Error('Longest side > than sum of other sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public radius: number,
    public color: Color,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public width: number,
    public height: number,
    public color: Color,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} with area ${figure.getArea()}`;
}
