enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'blue' | 'green';

function roundDownToHundreths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    public color: Color,
    ...args : number[]
  ) {
    if (args.some((side) => side <= 0)) {
      throw new Error('One side cannot be bigger than other two!');
    }

    const longestSide = Math.max(...args);

    if (longestSide >= args
      .filter((side) => side !== longestSide)
      .reduce((sum, side) => sum + side)) {
      throw new Error('Side value cannot be lesser than 1!');
    }

    [this.a, this.b, this.c] = args;
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);

    return roundDownToHundreths(Math
      .sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius value cannot be lesser than 1!');
    }
  }

  getArea(): number {
    return roundDownToHundreths((Math.PI * (this.radius ** 2)));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side value cannot be lesser than 1!');
    }
  }

  getArea(): number {
    return roundDownToHundreths(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
