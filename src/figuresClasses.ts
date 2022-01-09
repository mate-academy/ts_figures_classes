function roundDownToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

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

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  private a: number;

  private b: number;

  private c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Please, enter valid data');
    }

    const maxSide: number = Math.max(a, b, c);
    const sumOfLessSides: number = (a + b + c) - maxSide;

    if (maxSide >= sumOfLessSides) {
      throw new Error('Please, enter valid data');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  private radius: number;

  constructor(
    public color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Please, enter valid data');
    }

    this.radius = radius;
  }

  public getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  private height: number;

  private width: number;

  constructor(
    public color: Color,
    height: number,
    width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Please, enter valid data');
    }

    this.height = height;
    this.width = width;
  }

  public getArea(): number {
    const area: number = this.height * this.width;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
