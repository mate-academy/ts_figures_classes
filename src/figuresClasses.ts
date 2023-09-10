type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Some side is less than or equal to 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'One side is greater than or equal to the sum of the other two',
      );
    }
  }

  shape = Shape.triangle;

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less than or equal to 0');
    }
  }

  shape = Shape.circle;

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or height is less than or equal to 0');
    }
  }

  shape = Shape.rectangle;

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
