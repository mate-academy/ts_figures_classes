function isNotZeroSides(...sides: number[]): boolean {
  return sides.every((side) => side >= 0);
}

type Color = 'red' | 'blue' | 'green';

export enum FigureShapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: FigureShapes;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = FigureShapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isNotZeroSides(a, b, c)) {
      throw new Error('Sorry , all sides must be greater than zero !!!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'Sorry , 1 side can not be greater then sum of 2 other(((',
      );
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    const area = Math
      .sqrt(semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = FigureShapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!isNotZeroSides(radius)) {
      throw new Error('Sorry, radius can not be less then 0 !!!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = FigureShapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!isNotZeroSides(width, height)) {
      throw new Error('Sorry, but every sides must be greater than 0 !!!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
