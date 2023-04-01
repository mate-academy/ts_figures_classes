enum Shape {
  triangle,
  circle,
  rectangle,
}

type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    public color: Color,
    ...args : number[]
  ) {
    if (args.some((side) => side <= 0)) {
      throw new Error('Invalid sides value!');
    }

    const longestSide = Math.max(...args);

    if (longestSide >= args
      .filter((side) => side !== longestSide)
      .reduce((sum, side) => sum + side)) {
      throw new Error('Invalid sides value!');
    }

    [this.a, this.b, this.c] = args;
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);

    return Number(Math
      .sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius value!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid values!');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${Shape[figure.shape]} - ${figure.getArea()}`;
}
