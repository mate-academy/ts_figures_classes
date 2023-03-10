export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
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
      throw new Error('Wrong values of sides');
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
    public radius: number,
  ) {
    super();
    this.checkAllSides([radius]);
  }

  getArea(): number {
    return BaseFigure.roundNumber((Math.PI * this.radius ** 2));
  }
}

export class Rectangle extends BaseFigure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    super();
    this.checkAllSides([height, width]);
  }

  getArea(): number {
    return BaseFigure.roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
