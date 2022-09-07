type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'

}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number
}

function lessThanZeroError(...args: number[]): void {
  if (args.some((el) => el <= 0)) {
    throw new Error('Each element must be greater than zero');
  }
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    lessThanZeroError(a, b, c);

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side is greater'
      + 'than or equal to the sum of the other two');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    const area = +Math.sqrt(perimeter
      * ((perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c)))
      .toFixed(2);

    return area;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    lessThanZeroError(radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    lessThanZeroError(width, height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
