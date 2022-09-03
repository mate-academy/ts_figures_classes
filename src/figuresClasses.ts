enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isInValidLength(...args: number[]): boolean {
  return args.some((a: number) => a <= 0);
}

function floor(param: number): number {
  return Math.floor(100 * param) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxLength: number = Math.max(a, b, c);
    const invalidSidesRatio: boolean = maxLength >= a + b + c - maxLength;

    if (isInValidLength(a, b, c)
     || invalidSidesRatio) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c),
    );

    return floor(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isInValidLength(this.radius)) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    return floor(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    return floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
