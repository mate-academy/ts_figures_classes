export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c
      || c >= a + b
      || b >= c + a
    ) {
      throw new Error('please, put correct data');
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;

    const sum = (a + b + c) / 2;
    const area = Math.sqrt(sum * (sum - a) * (sum - b) * (sum - c));

    return round(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('please, put correct data');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('please, put correct data');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}
