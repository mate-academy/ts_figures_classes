enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isValidLength(...args: number[]): boolean {
  return args.some((a: number) => a <= 0);
}

function round(param: number): number {
  return Math.floor(100 * param) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxLength: number = Math.max(a, b, c);
    const validLength: boolean = maxLength >= a + b + c - maxLength;

    if (isValidLength(a, b, c)
     || validLength) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    const Perimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      Perimeter
      * (Perimeter - this.a)
      * (Perimeter - this.b)
      * (Perimeter - this.c),
    );

    return round(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

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
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
