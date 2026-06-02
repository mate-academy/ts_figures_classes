/* eslint-disable no-useless-constructor */

type ShapeType = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';
export interface Figure {
  shape: ShapeType;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides must be positive numbers');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('The given sides do not form a valid triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    // Implementation for circle area
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
