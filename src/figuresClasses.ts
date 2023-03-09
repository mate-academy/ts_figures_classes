enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

abstract class BaseFigure implements Figure {
  abstract readonly shape: Shape;

  abstract color: Color;

  abstract getArea(): number;

  protected checkAllSides(sides: number[]): void {
    if (sides.some((side) => side <= 0)) {
      throw new Error(
        `Figure of shape ${this.shape} should have only positive params`,
      );
    }
  }

  static roundNumber(value: number): number {
    return Math.floor(value * 100) / 100;
  }
}

export class Triangle extends BaseFigure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();

    this.checkAllSides([a, b, c]);

    const [
      sideA,
      sideB,
      sideC,
    ]: number[] = [a, b, c].sort((prev, next) => prev - next);

    if (sideC >= sideA + sideB) {
      throw new Error('Impossible values of sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c),
    );

    return BaseFigure.roundNumber(area);
  }
}

export class Circle extends BaseFigure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    super();
    this.checkAllSides([radius]);
  }

  getArea(): number {
    return BaseFigure.roundNumber((Math.PI * this.radius ** 2));
  }
}

export class Rectangle extends BaseFigure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    super();
    this.checkAllSides([height, width]);
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
