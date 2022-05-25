type Color = 'red' | 'green' | 'blue';

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

function round(n: number): number {
  return Math.floor(n * 100) / 100;
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
      throw new Error('Sides shold be positive');
    }

    if (a >= b + c
  || b >= a + c
  || c >= a + b) {
      throw new Error('Can not build a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;

    const TriangleArea = Math.sqrt(s
      * (s - a)
      * (s - b)
      * (s - c));

    return round(TriangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Can not build a circle');
    }
  }

  getArea():number {
    const { radius } = this;

    return round(Math.PI * radius * radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigh: number,
  ) {
    if (this.width <= 0 || this.heigh <= 0) {
      throw new Error('Can not build a rectangle');
    }
  }

  getArea(): number {
    const { width, heigh } = this;

    return round(width * heigh);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea.apply(figure)}`;
}
