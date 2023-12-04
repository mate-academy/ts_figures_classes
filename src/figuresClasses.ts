enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isTriangleValid()) {
      throw new Error(`The ${this.shape} is invalid`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Math.floor(area * 100) / 100;
  }

  private isTriangleValid(): boolean {
    const sides = [this.a, this.b, this.c].sort((x, y) => y - x);
    const [maxSide, x, y] = sides;

    return sides.every((side) => side > 0) && maxSide < x + y;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`The ${this.shape} is invalid`);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`The ${this.shape} is invalid`);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color, getArea } = figure;
  const area = getArea.call(figure);

  return `A ${color} ${shape} - ${area}`;
}
