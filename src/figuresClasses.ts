enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red,
  Green,
  Blue,
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
      throw new Error(`${this.shape} should have only positive params`);
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
      throw new Error('It`s impossible to create a triangle with these sides');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
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
    const area = Math.PI * (this.radius ** 2);

    return BaseFigure.roundNumber(area);
  }
}

export class Rectangle extends BaseFigure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    this.checkAllSides([width, height]);
  }

  getArea(): number {
    const area = this.width * this.height;

    return BaseFigure.roundNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
