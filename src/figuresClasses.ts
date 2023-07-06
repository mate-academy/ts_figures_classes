type FigureColor = 'red' | 'green' | 'blue';

enum FigureShape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

function roundDownToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: FigureShape = FigureShape.triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('throws an error: '
        + `sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = 1 / 2 * (a + b + c);
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape: FigureShape = FigureShape.circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public shape: FigureShape = FigureShape.rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
