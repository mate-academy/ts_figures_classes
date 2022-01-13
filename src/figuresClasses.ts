enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const MaxSizeOfSide = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid value/s for sides(values > 0) ');
    }

    if (MaxSizeOfSide >= (a + b + c) - MaxSizeOfSide) {
      throw new Error(`The sum of the lengths of
      any two sides of a triangle
      has to be greater than the length of the third side.`);
    }
    this.color = color;
  }

  public shape = Shape.Triangle;

  getArea(): number {
    const halfThePerimeter = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.sqrt(halfThePerimeter
      * (halfThePerimeter - this.a)
      * (halfThePerimeter - this.b)
      * (halfThePerimeter - this.c));

    return Number(areaOfTriangle.toFixed(2));
  }
}

export class Circle {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid value for radius size(value > 0)');
    }
    this.color = color;
  }

  public shape = Shape.Circle;

  getArea(): number {
    let circleArea = Math.PI * (this.radius * this.radius);

    circleArea = Math.trunc(circleArea * 100) / 100;

    return circleArea;
  }
}

export class Rectangle {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a < 0 || b < 0) {
      throw new Error('Invalid Value/s for sides(values > 0)');
    }
    this.color = color;
  }

  public shape = Shape.Rectangle;

  getArea(): number {
    let rectangleArea = this.a * this.b;

    rectangleArea = Math.trunc(rectangleArea * 100) / 100;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
