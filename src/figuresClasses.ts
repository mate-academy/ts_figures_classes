export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {}

export class Circle implements Figure {
  rds: number;

  shape: Shape;

  constructor(
    public color: Color,
    radius: number,
  ) {
    this.color = color;
    this.shape = 'circle';
    this.rds = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.rds ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  shape: Shape;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    this.width = a;
    this.height = b;
    this.shape = 'rectangle';
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('once with sides has zero!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
