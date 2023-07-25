type Color = 'red' | 'green' | 'blue';

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
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides must be greater than 0.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle sides.'
      + 'Sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    const area: number
      = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be 0 or less');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides cannot be 0 or less');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area: number = width * height;

    return Math.floor(100 * area) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
