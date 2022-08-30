type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Cicle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const checkValidFigure = (...sides:number[]): boolean => {
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
    if (checkValidFigure(a, b, c)) {
      throw new Error('Side should be > 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side is >= than a sum of two others');
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
  public shape = Shape.Cicle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkValidFigure(radius)) {
      throw new Error('Radius should be > 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkValidFigure(width, height)) {
      throw new Error('Side should be > 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
