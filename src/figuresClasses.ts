enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';
type Dimension = number;

function roundToHundredths(area: Dimension): Dimension {
  return Math.round(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => Dimension;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: Dimension,
    public b: Dimension,
    public c: Dimension,
  ) {
    const longSide = Math.max(a, b, c);
    const shortSide = Math.min(a, b, c);
    const sum = a + b + c;

    if (shortSide <= 0 || longSide >= sum - longSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): Dimension {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: Dimension,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a circle`);
    }
  }

  getArea(): Dimension {
    const area = Math.PI * this.radius ** 2;

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: Dimension,
    public height: Dimension,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `width ${width} and height ${height} can't form a rectangle`,
      );
    }
  }

  getArea(): Dimension {
    const { width, height } = this;
    const area = width * height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
