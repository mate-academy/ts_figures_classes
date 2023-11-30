type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side can`t be <= 0!');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(
        'The longest side of a triangle can`t be >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter: number = (a + b + c) / 2;

    return Math.floor(Math.sqrt(halfPerimeter * (halfPerimeter - a)
      * (halfPerimeter - b) * (halfPerimeter - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius can`t be <= 0!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side can`t be <= 0!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
