enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRoundDown(exp: number): number {
  return Math.floor(exp * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((el) => el <= 0)) {
      throw new Error('One side cannot be less than 1');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(`One of the sides cannot be greater
        than the sum of the other two sides`);
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return getRoundDown(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a) * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle Radius cannot be less than 1');
    }
  }

  getArea(): number {
    return getRoundDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if ([height, width].some((el) => el <= 0)) {
      throw new Error(`Length or Height of the rectangle
      cannot be less than 1`);
    }
  }

  getArea(): number {
    return getRoundDown(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
