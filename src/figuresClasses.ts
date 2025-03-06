export type Shape = 'triangle' | 'circle' | 'rectangle';

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('a and b and c must be greater than 0');
    }

    const sides: number[] = [a, b, c];

    const longestSide: number = Math.max(...sides);
    let sum: number = 0;

    for (const number of sides) {
      if (number !== longestSide) {
        sum += number;
      }
    }

    if (longestSide >= sum) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area1: number = s * (s - this.a) * (s - this.b) * (s - this.c);

    return +Math.sqrt(area1).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;
    const areaString: string = '' + area;
    const index: number = areaString.indexOf('.');
    const roundedAreaString: string = areaString.substring(0, index + 2 + 1);

    return +roundedAreaString;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
