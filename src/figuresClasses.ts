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

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((side) => side === 0)) {
      throw new Error('ERROR: invalid sides length (some length is <= than 0)');
    }

    const lengthSideСheck: boolean = a >= b + c || b >= a + c || c >= a + b;

    if (lengthSideСheck) {
      throw new Error(
        'ERROR: invalid sides length '
        + '(the longest side of a triangle is >= than a sum of two others)',
      );
    }
  }

  getArea():number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('ERROR: the value must be > than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const rectangleCheck: boolean = [width, height]
      .some((parameter) => parameter <= 0);

    if (rectangleCheck) {
      throw new Error('ERROR: width and hight must be >= than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
