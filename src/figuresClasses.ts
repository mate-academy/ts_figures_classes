type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape
  color: Color
  getArea(): number
}

export class Triangle {
  shape: Shape = Shape.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw new Error();
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))
      .toFixed(2);
  }
}

export class Circle {
  shape: Shape = Shape.circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.radius * this.radius * 3.14).toFixed(2);
  }
}

export class Rectangle {
  shape: Shape= Shape.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
