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

export class Triangle implements Figure {
  protected sidesArray: number[] = [this.a, this.b, this.c];

  protected longestSide: number = this.sidesArray.splice(
    this.sidesArray.indexOf(Math.max(...this.sidesArray)),
  )[0];

  protected otherSidesSum: number = this.sidesArray.reduce(
    (acc: number, sideLength: number) => acc + sideLength,
    0,
  );

  protected semiperimeter: number = (this.longestSide + this.otherSidesSum) / 2;

  protected isSidesWrong: boolean = this.longestSide >= this.otherSidesSum;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    readonly shape: Shape = Shape.Triangle,
  ) {
    if (this.sidesArray.some((side) => side <= 0)) {
      throw new Error('length of some side is <= 0');
    }

    if (this.isSidesWrong) {
      throw new Error(
        // eslint-disable-next-line max-len
        'Sides`s values are wrong (the longest side of a triangle is >= than a sum of two others)',
      );
    }
  }

  getArea(): number {
    return +Math.sqrt(
      this.semiperimeter *
        (this.semiperimeter - this.a) *
        (this.semiperimeter - this.b) *
        (this.semiperimeter - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    readonly shape: Shape = Shape.Circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is wrong (radius is <= 0)');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    readonly shape: Shape = Shape.Rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Sides`s values are wrong (one of side`s values is <= 0)',
      );
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
