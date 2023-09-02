enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'blue' | 'green';

const errorMessageForWrongValues = 'Invalid values entered';

function roundDown(number: number, decimals: number = 2): number {
  const factor = 10 ** decimals;

  return Math.floor(number * factor) / factor;
}

export interface Figure {
  shape: Shape;
  color: Color;

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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(errorMessageForWrongValues);
    }

    const longestSide = Math.max(a, b, c);
    const sumOfSides = a + b + c;

    if (sumOfSides - longestSide <= longestSide) {
      throw new Error(errorMessageForWrongValues);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return roundDown(
      Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(errorMessageForWrongValues);
    }
  }

  getArea(): number {
    return roundDown(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(errorMessageForWrongValues);
    }
  }

  getArea(): number {
    return roundDown(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
