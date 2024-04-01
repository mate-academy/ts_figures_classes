type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c - max;

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p: number = (a + b + c) / 2;
    const S: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const S = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const S = width * height;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure): string {
  const { shape, color } = figure;
  const result = figure.getArea();

  return `A ${color} ${shape} - ${result}`;
}
