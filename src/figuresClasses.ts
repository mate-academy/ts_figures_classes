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

function roundToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

const ERROR_SIDE_NULL
  = 'incorrect side lengths, enter the correct values ​​greater than 0';
const ERROR_INCORRECT_SIDE = 'incorrect side lengths, enter the correct values';
const ERROR_RADIUS = 'radius is incorrect, enter a value greater than 0';

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERROR_SIDE_NULL);
    }

    const longSide = Math.max(a, b, c);

    if (longSide >= a + b + c - longSide) {
      throw new Error(ERROR_INCORRECT_SIDE);
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      halfPerimetr * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c),
    );

    return roundToHundredths(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_RADIUS);
    }
  }

  getArea(): number {
    const multipleRadiusPi = Math.PI * (this.radius * this.radius);

    return roundToHundredths(multipleRadiusPi);
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
      throw new Error(ERROR_SIDE_NULL);
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
