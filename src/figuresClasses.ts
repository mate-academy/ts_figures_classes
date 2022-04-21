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
  getType(): Shape;
  getColor(): Color;
  getArea(): number;
}

export class Triangle implements Figure {
  private shape: Shape;

  constructor(
    private color: Color,
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

    this.shape = Shape.Triangle;
  }

  public getType(): Shape {
    return this.shape;
  }

  public getColor(): Color {
    return this.color;
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
  private shape: Shape;

  constructor(
    private color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('can\'t form a circle with that size');
    }
    this.shape = Shape.Circle;
  }

  public getType(): Shape {
    return this.shape;
  }

  public getColor(): Color {
    return this.color;
  }

  public getArea(): number {
    const { radius } = this;
    const SQUARE_RADIUS = radius ** 2;

    return roundNumber(Math.PI * SQUARE_RADIUS, 2);
  }
}

export class Rectangle implements Figure {
  private shape: Shape;

  constructor(
    private color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('can\'t form a rectancgle with that width and height');
    }
    this.shape = Shape.Rectangle;
  }

  public getType(): Shape {
    return this.shape;
  }

  public getColor(): Color {
    return this.color;
  }

  public getArea(): number {
    return roundNumber(this.width * this.height, 2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.getColor()} ${figure.getType()} `
  + `- ${figure.getArea()}`;
}
