enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red,
  green,
  blue
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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The longest side of a triangle should'
        + 'be greater than a sum of two others');
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b)
      * (semiP - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor((square * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return (area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
