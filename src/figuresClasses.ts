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
  getArea: () => number;
}

function makeRoundedNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Error:'
        + ' The specified sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return makeRoundedNumber(Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if ([radius].some((number) => number <= 0)) {
      throw new Error('Error:'
      + 'The specified radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error:'
      + 'The width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
