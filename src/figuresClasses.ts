enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

function toRoundedSquare(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): void;
}

export class Triangle implements Figure {
  shape: Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0 || b <= 0 || c <= 0
      || a >= b + c || b >= a + c || c >= a + b
    ) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.shape = Shape.triangle;
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const square: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return toRoundedSquare(square);
  }
}

export class Circle implements Figure {
  shape: Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius ${radius} can't form a circle`);
    }

    this.shape = Shape.circle;
  }

  getArea(): number {
    const { radius } = this;
    const square: number = Math.PI * radius ** 2;

    return toRoundedSquare(square);
  }
}

export class Rectangle implements Figure {
  shape: Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Sides ${width} and ${height} can't form a rectangle`);
    }

    this.shape = Shape.rectangle;
  }

  getArea(): number {
    const { width, height } = this;
    const square: number = width * height;

    return toRoundedSquare(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
