enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export function checkLength(...sides: number[]): boolean {
  sides.sort((firstSide: number, secondSide: number) => secondSide - firstSide);

  return sides[0] < sides[1] + sides[2];
}

export function negativeLength(...length: number[]): boolean {
  return Math.min(...length) <= 0;
}

export function roundNumbers(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface BaseFigure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements BaseFigure {
  readonly shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!checkLength(a, b, c)) {
      throw new Error('Impossible to build a triangle with these sides!');
    }

    if (negativeLength(a, b, c)) {
      throw new Error('Wrong length, side must be greater than zero');
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

    return roundNumbers(area);
  }
}

export class Circle implements BaseFigure {
  readonly shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (negativeLength(radius)) {
      throw new Error('Wrong length of the radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    return roundNumbers(radius ** 2 * Math.PI);
  }
}

export class Rectangle implements BaseFigure {
  readonly shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (negativeLength(width, height)) {
      throw new Error('WorWrong length of sides');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return roundNumbers(width * height);
  }
}

export function getInfo(figure: BaseFigure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
