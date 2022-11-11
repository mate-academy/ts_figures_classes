
type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('wrong input for Triangle');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('wrong input for Triangle');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(
      perimeter * (perimeter - this.a)
      * (perimeter - this.b) * (perimeter - this.c),
    );

    return Math.floor(triangleSquare * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('wrong inputfor Circle');
    }
  }

  getArea(): number {
    const circleSquare = Math.PI * this.radius ** 2;

    return Math.floor(100 * circleSquare) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('wrong input for Rectangle');
    }
  }

  getArea(): number {
    const rectangleArea: number = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
