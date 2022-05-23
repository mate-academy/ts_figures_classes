enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';
type Callbeck = (arg: number) => number;

const roundingToHundredth: Callbeck = (n) => Math.floor(n * 100) / 100;
const checkSizeOfNumber = (...args: number[]): void => {
  if (args.some((num) => (num <= 0))) {
    throw new Error('Error, entered wrong parameters');
  }
};

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSizeOfNumber(a, b, c);

    if ((a + b) <= c
    || (a + c) <= b || (c + b) <= a) {
      throw new Error('Error, entered wrong parameters');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return roundingToHundredth(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkSizeOfNumber(radius);
  }

  getArea(): number {
    return roundingToHundredth(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkSizeOfNumber(width, height);
  }

  getArea(): number {
    return roundingToHundredth(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
