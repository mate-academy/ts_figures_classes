enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be positive integers');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Those sides cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    return Number((3.14 * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
