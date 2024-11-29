export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all sides of triangle must be greater than 0');
    }

    const biggestSide = Math.max(a, b, c);
    const sumOfSmaller = a + b + c - biggestSide;

    if (biggestSide >= sumOfSmaller) {
      throw new Error(`sides ${a}, ${b} and ${c} can not form a triangle`);
    }
  }

  public getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(
          semiperimeter *
            (semiperimeter - this.a) *
            (semiperimeter - this.b) *
            (semiperimeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius of circle must be greater than 0');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('all sides of rectangle must be greater than 0');
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
