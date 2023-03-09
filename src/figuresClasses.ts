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
  shape: Shape,
  color: Color,
  getArea(): number,
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
      throw new Error('Impossible to build a triangle with these sides!');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return BaseFigure.roundNumber(area);
  }
}

export class Circle extends BaseFigure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    super();

    this.checkAllSides([r]);
  }

  getArea(): number {
    const area = Math.PI * (this.r * this.r);

    return BaseFigure.roundNumber(area);
  }
}

export class Rectangle extends BaseFigure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    super();

    this.checkAllSides([a, b]);
  }

  getArea(): number {
    const area = this.a * this.b;

    return BaseFigure.roundNumber(area);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
