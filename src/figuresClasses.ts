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

function round(n: number): number {
  return Math.floor(n * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be positive');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Can not build a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;

    const triangleArea = Math.sqrt(s * (s - a)
    * (s - b) * (s - c));

    return round(triangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Can not build a circle');
    }
  }

  getArea(): number {
    const { radius } = this;

    const circleArea = Math.PI * radius ** 2;

    return round(circleArea);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Can not build a rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const rectangleArea = width * height;

    return round(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
