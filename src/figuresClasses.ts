const INVALID_VALUE_ERROR_MESSAGE
= 'This is impossible to have any value that <= 0!';
const INVALID_VALUES_OF_TRIANGLE_SIDES = 'Invalid values of triangle sides';

function formattedShapeValues(area: number): number {
  return Math.floor(area * 100) / 100;
}

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
  shape: Shape,
  color: Color,
  getArea(): number,
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
      throw new Error(INVALID_VALUE_ERROR_MESSAGE);
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(INVALID_VALUES_OF_TRIANGLE_SIDES);
    }
  }

  getArea(): number {
    const semiperimetr = (this.a + this.b + this.c) / 2;

    const triangleArea = Math.sqrt(
      semiperimetr
        * (semiperimetr - this.a)
        * (semiperimetr - this.b)
        * (semiperimetr - this.c),
    );

    return formattedShapeValues(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(INVALID_VALUE_ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return formattedShapeValues(circleArea);
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
      throw new Error(INVALID_VALUE_ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return formattedShapeValues(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
