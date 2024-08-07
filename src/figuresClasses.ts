/* eslint-disable @typescript-eslint/indent */
// I turned it off 'cause typescript-eslint makes a lot of conflicts
// with prettier
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  lue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

abstract class FigureBase {
  static checkWrongSideOfFigure(sides: number[]): void {
    if (sides[0] <= 0 && sides.length === 1) {
      throw new Error('Radius is wrong (radius is <= 0)');
    }

    if (sides.some((side: number) => side <= 0)) {
      throw new Error('Length of some side is <= 0');
    }
  }
}

export class Triangle extends FigureBase implements Figure {
  readonly shape: Shape = Shape.Triangle;

  protected sidesArray: number[] = [this.a, this.b, this.c];

  protected longestSide: number = Math.max(...this.sidesArray);

  protected otherSidesSum: number =
    this.sidesArray.reduce((acc: number, sideLen: number) => {
      return acc + sideLen;
    }, 0) - this.longestSide;

  protected semiPerimeter: number = (this.longestSide + this.otherSidesSum) / 2;

  protected isSidesWrong: boolean = this.longestSide >= this.otherSidesSum;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();
    Triangle.checkWrongSideOfFigure(this.sidesArray);

    if (this.isSidesWrong) {
      throw new Error(
        'Sides`s values are wrong' +
          '(the longest side of a triangle is >= than a sum of two others)',
      );
    }
  }

  getArea(): number {
    return +Math.sqrt(
      this.semiPerimeter *
        (this.semiPerimeter - this.a) *
        (this.semiPerimeter - this.b) *
        (this.semiPerimeter - this.c),
    ).toFixed(2);
  }
}

export class Circle extends FigureBase implements Figure {
  readonly shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    super();
    Circle.checkWrongSideOfFigure([this.radius]);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends FigureBase implements Figure {
  readonly shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();
    Rectangle.checkWrongSideOfFigure([this.width, this.height]);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
