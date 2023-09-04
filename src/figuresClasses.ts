function isTrianglePossible(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

function roundDownFloat(number: number, amountOfDecimals: number = 2): number {
  const numbersAfterFloat = 10 ** amountOfDecimals;

  return Math.floor(number * numbersAfterFloat) / numbersAfterFloat;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red'|'blue'|'green';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((number) => number <= 0)) {
      throw new Error("Sides of the triangle can't be equal or smaller than 0");
    }

    if (!isTrianglePossible(a, b, c)) {
      throw new Error("One side can't be greater than the sum of two others");
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return roundDownFloat(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error("Radius can't be equal to or smaller than 0");
    }
  }

  getArea(): number {
    const area = this.radius ** 2 * Math.PI;

    return roundDownFloat(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error("Height and width can't be equal to or smaller than 0");
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundDownFloat(area);
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figureArea}`;
}
