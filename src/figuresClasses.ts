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
    if (a < 0 || b < 0 || c < 0) {
      throw new Error("side can't be negative");
    }

    const longestSide = Math.max(a, b, c);
    const twoSides = [a, b, c].filter((el: number) => el !== longestSide);

    if (
      longestSide >= twoSides.reduce((prev: number, el: number) => prev + el, 0)
    ) {
      throw new Error("One side can't be longer than sum of two other");
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error("radius can't be negative");
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error("side can't be negative");
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
