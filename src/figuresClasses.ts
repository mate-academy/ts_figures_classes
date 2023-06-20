enum Color {
  green = 'green',
  red = 'red',
  blue = 'blue',
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color = Color.green,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid side length');
    }

    if (c >= a + b || a >= b + c || b >= a + c) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const square = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(square * (square - this.a)
    * (square - this.b) * (square - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color = Color.red,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const x = this.a ** 2;
    const formul = Math.PI * x;

    return Math.floor(100 * formul) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color = Color.blue,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
