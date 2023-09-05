const ERROR_MESSAGE = {
  wrongRadius: 'The radius length is <= 0.',
  wrongLength: 'Side length is <= 0.',
  tooLongSide: 'The longest side of a triangle is >= than a sum of two others.',
};

const roundToTwoDecimals = (value: number): number => {
  return Math.floor(value * 100) / 100;
};

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

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERROR_MESSAGE.wrongLength);
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(ERROR_MESSAGE.tooLongSide);
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
    );

    return roundToTwoDecimals(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE.wrongRadius);
    }
  }

  getArea(): number {
    return roundToTwoDecimals(Math.PI * (this.radius ** 2));
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
      throw new Error(ERROR_MESSAGE.wrongLength);
    }
  }

  getArea(): number {
    return roundToTwoDecimals(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
