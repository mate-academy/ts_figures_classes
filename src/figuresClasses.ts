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
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) * 0.5;

    return Math.round(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;
  }

  getArea(): number {
    return Math.round(3.14 * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectangle;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
