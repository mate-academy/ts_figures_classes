enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
