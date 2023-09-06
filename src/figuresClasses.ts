type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const error = (): void => {
  throw new Error('Enter correct parameters');
};

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c || a + c <= b || c + b <= a) {
      error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square
     = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (radius <= 0) {
      error();
    }
  }

  getArea(): number {
    const square = Math.PI * (this.radius * this.radius);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.a = a;
    this.b = b;

    if (a <= 0 || b <= 0) {
      error();
    }
  }

  getArea(): number {
    const square = this.a * this.b;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
