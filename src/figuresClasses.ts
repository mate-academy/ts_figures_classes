type Color = 'red' | 'green' | 'blue';
// type Shape = 'triangle' | 'circle' | 'rectangle';
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

function round(area: number): number {
  return Math.floor(area * 100) / 100;
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

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error('Can not build triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;

    const triangleArea = Math.sqrt(s
      * (s - a)
      * (s - b)
      * (s - c));

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
      throw new Error('Can not build circle');
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
      throw new Error('Can not build rectangle');
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
