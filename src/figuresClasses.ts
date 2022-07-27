enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (!Triangle.isRightTriangle(a, b, c)) {
      this.throwError();
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getArea() {
    const halfP = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );

    return Math.floor(area * 100) / 100;
  }

  static isRightTriangle(a: number, b: number, c: number): boolean {
    const isRight = !((a >= b + c) || (b >= a + c) || (c >= a + b));
    const isAllPositive = a && b && c;

    return Boolean(isRight && isAllPositive);
  }

  throwError(): void {
    throw Error(`${this.shape} not right`);
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      this.throwError();
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }

  throwError(): void {
    throw Error(`${this.shape} not right`);
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = Shape.Rectangle;

    if (a <= 0 || b <= 0) {
      this.throwError();
    }
  }

  getArea(): number {
    return this.a * this.b;
  }

  throwError(): void {
    throw Error(`${this.shape} not right`);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
