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

function getShortValue(exp: number): number {
  const shorthand = 1e2;

  return Math.trunc(exp * shorthand) / shorthand;
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
      throw new Error('One side of a triangle cannot be <= 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('One side of a triangle cannot be greater '
        + 'than the sum of the other sides.');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return getShortValue(s);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle cannot be <= 0');
    }
  }

  getArea(): number {
    const result: number = (Math.PI * (this.radius ** 2));

    return getShortValue(result);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ([width, height].some((el) => el <= 0)) {
      throw new Error('One of the sides of the rectangle must not be <= 0');
    }
  }

  getArea(): number {
    const result = this.height * this.width;

    return getShortValue(result);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
