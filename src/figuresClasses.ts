
type Color = 'red' | 'green' | 'blue';
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number;
}

function calculateFigureArea(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesSum = this.a + this.b + this.c;
    const maxSide = Math.max(this.a, this.b, this.c);
    const sumTwoSmallerSides = sidesSum - maxSide;

    if (maxSide >= sumTwoSmallerSides) {
      throw new Error('The largest side is less '
        + 'than the sum of the two smaller sides');
    }

    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const sidesSum = this.a + this.b + this.c;
    const halfPerimeter = sidesSum / 2;

    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return calculateFigureArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return calculateFigureArea(area);
  }
}

export class Rectangle {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`sides ${a} or ${b} can't form a rectangle`);
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
