enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = FigureShape.Triangle;

  public getArea(): number {
    const halfSquare = (this.a + this.b + this.c) / 2;

    const square = (halfSquare
      * (halfSquare - this.a)
      * (halfSquare - this.b)
      * (halfSquare - this.c))
      ** 0.5;

    return Math.floor(square * 100) / 100;
  }

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((item: number) => item <= 0)) {
      throw new Error('Invalid parameters!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This is not triangle');
    }
  }
}

export class Circle implements Figure {
  public shape = FigureShape.Circle;

  public getArea(): number {
    const circleSquare = Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;

    return circleSquare;
  }

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius!');
    }
  }
}

export class Rectangle implements Figure {
  public shape = FigureShape.Rectangle;

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid values');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
