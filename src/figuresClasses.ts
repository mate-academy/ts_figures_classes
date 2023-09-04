enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape.Triangle = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid side length');
    }

    const triangleSides = [a, b, c]
      .sort((sideA: number, sideB: number) => sideB - sideA);
    const isTriangleInvalid = triangleSides[0] >= (
      triangleSides[1] + triangleSides[2]
    );

    if (isTriangleInvalid) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      semi * (semi - this.a) * (semi - this.b) * (semi - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape.Circle = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid radius');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius * this.radius);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape.Rectangle = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('invalid width or height');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  const square = figure.getArea();

  return `A ${color} ${shape} - ${square}`;
}
