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
  getArea(): number;
}

function validProp(...args: number[]): void {
  if (args.some((num) => num <= 0)) {
    throw new Error('Length of properties should be a positive number');
  }
}

function roundResult(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validProp(a, b, c);

    if (
      a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)
    ) {
      throw new Error('The longest side is longer than sum of two others');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const areaOfTriangle = halfPerimeter
    * (halfPerimeter - this.a)
    * (halfPerimeter - this.b)
    * (halfPerimeter - this.c);

    let result = Math.sqrt(areaOfTriangle);

    result = roundResult(result);

    return result;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validProp(radius);
  }

  getArea(): number {
    let squareOfCircle = Math.PI * (this.radius ** 2);

    squareOfCircle = roundResult(squareOfCircle);

    return squareOfCircle;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validProp(width, height);
  }

  getArea(): number {
    const areaOfRectangle = this.width * this.height;

    return Math.floor(areaOfRectangle);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
