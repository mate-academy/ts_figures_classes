enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export const roundNumber = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: FigureShape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Every side of Triangle must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of two sides cannot be greater than the third side');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(
      perimeter * (perimeter - this.a)
      * (perimeter - this.b) * (perimeter - this.c),
    );

    return roundNumber(triangleSquare);
  }
}

export class Circle implements Figure {
  shape: FigureShape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Radius of circle must be greater than zero');
    }
  }

  getArea(): number {
    const circleSquare = Math.PI * this.radius ** 2;

    return roundNumber(circleSquare);
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width & height of Rectangle must be greater than zero');
    }
  }

  getArea(): number {
    const rectangleArea: number = this.width * this.height;

    return roundNumber(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  const {
    color,
    shape,
  } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
