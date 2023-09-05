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
type AreaCallback = () => number;

function roundDownToHundreds(value: number): number {
  return Math.floor(value * 100) / 100;
}
// eslint-disable-next-line
const ERROR_MESSAGE_WRONG_ARGS = 'Error, all arguments should be numbers above 0';

export interface Figure {
  shape: FigureShape,
  color: FigureColor,
  getArea: AreaCallback,
}

export class Triangle implements Figure {
  shape: FigureShape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const minNumber = Math.min(a, b, c);

    if (minNumber <= 0) {
      throw new Error(ERROR_MESSAGE_WRONG_ARGS);
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`sides ${a} ${b} ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimiter = (this.a + this.b + this.c) / 2;
    const aDifference = semiPerimiter - this.a;
    const bDiffernece = semiPerimiter - this.b;
    const cDifference = semiPerimiter - this.c;
    const area = Math.sqrt(
      semiPerimiter * aDifference * bDiffernece * cDifference,
    );

    return roundDownToHundreds(area);
  }
}

export class Circle implements Figure {
  shape: FigureShape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error(ERROR_MESSAGE_WRONG_ARGS);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDownToHundreds(area);
  }
}

export class Rectangle {
  shape: FigureShape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error(ERROR_MESSAGE_WRONG_ARGS);
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
