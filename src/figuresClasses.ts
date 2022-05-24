
function paramsOverZero(...args: number[]): void {
  const params = args;

  if (params.some((x: number) => x <= 0)) {
    throw new Error('one of side less than 0');
  }
}

function checkLongestSide(
  a: number,
  b: number,
  c: number,
): void {
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('one side longer than sum others');
  }
}

function round(n: number):number {
  return Math.floor(n * 100) / 100;
}

type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape
  color: Color

  getArea: () => {}
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    paramsOverZero(a, b, c);
    checkLongestSide(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiP = (a + b + c) / 2;

    const bigRes = Math.sqrt(
      semiP * (semiP - a) * (semiP - b) * (semiP - c),
    );

    return round(bigRes);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    paramsOverZero(radius);
  }

  getArea(): number {
    const { radius } = this;

    return round(Math.PI * (radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    paramsOverZero(width, height);
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
