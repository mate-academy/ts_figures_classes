enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape
  color: Color

  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSideLength = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect side length');
    }

    if (maxSideLength >= a + b + c - maxSideLength) {
      throw new Error('Incorrect side length');
    }
  }

  public getArea(): number {
    const { a, b, c } = this;
    const halfThePerimeter: number = (a + b + c) / 2;
    const sqrt: number = Math.sqrt(
      halfThePerimeter
      * (halfThePerimeter - a)
      * (halfThePerimeter - b)
      * (halfThePerimeter - c),
    );

    return Math.floor((sqrt * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius length');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect side length');
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
