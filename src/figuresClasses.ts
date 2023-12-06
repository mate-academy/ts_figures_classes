export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isInvalidSideLength = a <= 0 || b <= 0 || c <= 0;
    const isInvalidTriangleInequality = a + b <= c || a + c <= b || b + c <= a;

    if (isInvalidSideLength || isInvalidTriangleInequality) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;

    return +Math.sqrt(semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b) * (semiPerimeter - c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(color: Color, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
