enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function roundArea(area: number): number {
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
    const isTriangle: boolean = a + b <= c || a + c <= b || b + c <= a;
    const isSide = a <= 0 || b <= 0 || c <= 0;

    if (isTriangle) {
      throw new Error('Incorrect side values!');
    }

    if (isSide) {
      throw new Error('Side must be greater than 0!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should not be 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side should not be 0');
    }
  }

  getArea(): number {
    const { height, width } = this;
    const area = height * width;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
