type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private sides: number[];

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (
      (Math.min(a, b, c) <= 0)
      || (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c))
    ) {
      throw new Error(
        'Each side must be greater than 0 '
        + 'and the longest side must be shorter than a sum of two others.',
      );
    }
    this.sides = [a, b, c];
  }

  getArea(): number {
    const p = (this.sides[0] + this.sides[1] + this.sides[2]);

    return Math.sqrt(p
      * (p - this.sides[0])
      * (p - this.sides[1])
      * (p - this.sides[2]));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Radius length must be greater than 0.',
      );
    }
  }

  getArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  private width: number;

  private height: number;

  constructor(
    public color: Color,
    width: number,
    height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error(
        'Each side length of the rectangle must be greater than 0',
      );
    }
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
