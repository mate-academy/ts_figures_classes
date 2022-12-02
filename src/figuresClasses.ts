enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arr = [a, b, c];

    if (arr.find((el) => el <= 0)) {
      throw new Error('your error message');
    }

    const maxSide = arr.sort((x, y) => x - y).pop();
    const restSidesSum = arr.reduce((x, y) => x + y, 0);

    if (maxSide && maxSide >= restSidesSum) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)) * 100) / 100;
  }
}

export class Circle {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const arr = [width, height];

    if (arr.find((el) => el <= 0)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Triangle|Circle|Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
