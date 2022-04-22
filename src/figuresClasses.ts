function roundNumber(number: number, digitsAfterComma: number): number {
  return Math.trunc(number * (10 ** digitsAfterComma))
    / (10 ** digitsAfterComma);
}

enum Shape{
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color{
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if ((a + b <= c)
     || (b + c <= a)
     || (a + c <= b)
    ) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  public getArea(): number {
    const { a } = this;
    const { b } = this;
    const { c } = this;
    const s = (a + b + c) / 2;

    return roundNumber(Math.sqrt(s * (s - a) * (s - b) * (s - c)), 2);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('can\'t form a circle with that size');
    }
  }

  public getArea(): number {
    const { radius } = this;
    const SQUARE_RADIUS = radius ** 2;

    return roundNumber(Math.PI * SQUARE_RADIUS, 2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('can\'t form a rectancgle with that width and height');
    }
  }

  public getArea(): number {
    return roundNumber(this.width * this.height, 2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} `
  + `- ${figure.getArea()}`;
}
