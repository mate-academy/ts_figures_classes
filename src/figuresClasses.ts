enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function areValidDimensions(...sides: number[]): void {
  if (sides.some((side: number) => side <= 0)) {
    throw new Error('Dimensions are not valid for triangle');
  }
}

function rounded(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    areValidDimensions(a, b, c);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side is longer than other side!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return rounded(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    areValidDimensions(radius);
  }

  getArea(): number {
    return rounded(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    areValidDimensions(width, height);
  }

  getArea(): number {
    return rounded(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
