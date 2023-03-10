enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
  Square = 'square'
}

enum Color {
  Red = 'triangle',
  Green = 'circle',
  Blue = 'rectangle',
  Orange = 'square',
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

  protected checkSize(sides: number[]): void {
    if (sides.some((side) => side <= 0)) {
      throw new Error(`${this.shape} should have only positive params`);
    }
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

    this.checkSize([a, b, c]);

    const [
      sideA,
      sideB,
      sideC,
    ]: number[] = [a, b, c].sort((prev, next) => prev - next);

    if (sideC >= sideA + sideB) {
      throw new Error('Impossible to create a triangle with these sides');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiP
      * (semiP - this.a)
      * (semiP - this.b)
      * (semiP - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle extends BaseFigure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    super();
    this.checkSize([radius]);
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();
    this.checkSize([width, height]);
  }

  getArea(): number {
    const rectangleArea: number = this.width * this.height;

    return rectangleArea;
  }
}

export class Square extends Rectangle {
  readonly shape = Shape.Square;

  constructor(
    public color: Color,
    public side: number,
  ) {
    super(color, side, side);
    this.checkSize([side]);
  }

  getArea(): number {
    const squareArea: number = this.side ** 2;

    return squareArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
