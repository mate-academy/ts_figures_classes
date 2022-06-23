type Color = 'red'| 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
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
      throw new Error('Not a triangle!');
    }

    const sides: number[] = [a, b, c].sort((sideA, sideB) => sideB - sideA);

    if (sides[0] >= (sides[2] + sides[1])) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);
    const result = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not a Circle!');
    }
  }

  getArea(): number {
    const { radius } = this;
    const result = Math.PI * (radius ** 2);

    return Math.floor(result * 100) / 100;
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
      throw new Error('Not a Rectangle!');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
