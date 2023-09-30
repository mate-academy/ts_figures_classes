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

function round(value: number): number {
  return Math.floor(value * 100) / 100;
}

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
    const minNum = Math.min(a, b, c);

    if (minNum <= 0) {
      throw new Error('Error, sides must be greater than 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`Error, sides ${a} ${b} ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const square = (a + b + c) / 2;
    const area = Math.sqrt(square * (square - a) * (square - b) * (square - c));

    return round(area);
  }
}

export class Circle implements Figure {
  shape: FigureShape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Error, radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return round(area);
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
      throw new Error('Error, width and height must be greater than 0');
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
