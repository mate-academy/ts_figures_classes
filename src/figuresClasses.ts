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
  static checkWrongSidesOfFigure(figureSidesArray: number[] | number): void {
    if (typeof figureSidesArray === 'number') {
      if (figureSidesArray <= 0) {
        throw new Error('Radius is wrong (radius is <= 0)');
      }
    }

    // we have to do Array.isArray(figureSidesArray),
    // otherwise figureSidesArray.some((side: number) => side <= 0) does't work
    if (
      Array.isArray(figureSidesArray) &&
      figureSidesArray.some((side: number) => side <= 0)
    ) {
      throw new Error('Length of some side is <= 0');
    }
  }
}

export class Triangle extends FigureBase implements Figure {
  readonly shape: Shape = Shape.Triangle;

  protected sidesArray: number[] = [this.a, this.b, this.c];

  protected longestSide: number = [...this.sidesArray].splice(
    this.sidesArray.indexOf(Math.max(...this.sidesArray)),
  )[0];

  protected otherSidesSum: number = this.sidesArray.reduce(
    (acc: number, sideLength: number) => acc + sideLength,
    0,
  );

  protected semiPerimeter: number = (this.longestSide + this.otherSidesSum) / 2;

  protected isSidesWrong: boolean = this.longestSide >= this.otherSidesSum;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();
    Triangle.checkWrongSidesOfFigure(this.sidesArray);

    if (this.isSidesWrong) {
      throw new Error(
        // eslint-disable-next-line max-len
        'Sides`s values are wrong (the longest side of a triangle is >= than a sum of two others)',
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
    Circle.checkWrongSidesOfFigure(this.radius);
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
    Rectangle.checkWrongSidesOfFigure([this.width, this.height]);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
