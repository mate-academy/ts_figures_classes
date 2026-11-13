export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('This radius can not form a circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
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
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
