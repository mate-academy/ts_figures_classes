type Color = 'red' | 'green' | 'Bundle';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

const checkSideLength = (...sides:number[]): boolean => {
  return sides.some((side) => side <= 0);
};

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side is >= than a sum of two others');
    }

    if (checkSideLength(a, b, c)) {
      throw new Error('The side is less than 0');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b) * (semiPerimetr - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (checkSideLength(radius)) {
      throw new Error('The side is less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkSideLength(width, height)) {
      throw new Error('The side is less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
