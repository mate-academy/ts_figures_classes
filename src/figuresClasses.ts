export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {}

export class Circle implements Figure {}

export class Rectangle implements Figure {
  width: number;

  height: number;

  shape: string;

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
  return typeof figure;

  // const result = getArea();
  // return `A ${this.color} ${this.shape} - ${result}`;
}
