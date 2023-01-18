type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];
    const longestSide = Math.max(...triangleSides);
    const sumOfShorterSide = triangleSides
      .filter((side) => side !== longestSide)
      .reduce((x, y) => x + y, 0);

    if (triangleSides.some((side) => side <= 0)) {
      throw new Error('Error: all sides should be > 0');
    }

    if (longestSide >= sumOfShorterSide) {
      throw new Error('Error: invalid sides value');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimeter
      * (semiperimeter - this.a) * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error: radius should be > 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error: width and height should be > 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
