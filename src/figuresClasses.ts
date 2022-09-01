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

function checkZero(...args: number[]): boolean {
  return args.some((item) => item <= 0);
}

function roundArea(area: number): number {
  return Math.trunc(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkZero(a, b, c)) {
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

    return roundArea(area);
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
    const area: number = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const rectangleCheck: boolean = checkZero(width, height);

    if (rectangleCheck) {
      throw new Error('ERROR: width and hight must be >= than 0');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
