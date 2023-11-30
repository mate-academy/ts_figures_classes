enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Wrong sides for a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter: number = (a + b + c) / 2;
    const areaTriangle: number = Math.sqrt(
      semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Math.floor(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('A circle should have a radius < 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('A rectangle should have all sides < 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.round(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
