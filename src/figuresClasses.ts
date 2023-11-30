
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
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
    private color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('side is not correct');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) * (1 / 2);
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    private color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is not correct');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    private color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side is not correct');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
