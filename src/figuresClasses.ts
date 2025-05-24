enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,

    public a: number,

    public b: number,

    public c: number,

    public readonly shape: Shape = Shape.Triangle,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Every side should be more than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side can`t be longer than the sum of the other two');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = 0.5 * (a + b + c);

    const Area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return parseFloat(Area.toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,

    public radius: number,

    public readonly shape: Shape = Shape.Circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can`t be less then 1');
    }
  }

  getArea(): number {
    const { radius } = this;

    const Area: number = Math.PI * Math.pow(radius, 2);

    return Math.floor(Area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,

    public width: number,

    public height: number,

    public readonly shape: Shape = Shape.Rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Every side should be more than 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const Area: number = width * height;

    return parseFloat(Area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
