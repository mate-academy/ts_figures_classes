
type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

let p: number;
let square: number;

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0) {
      throw new Error('you error message');
    }

    if (b <= 0) {
      throw new Error('you error message');
    }

    if (c <= 0) {
      throw new Error('you error message');
    }

    if (a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw new Error('you error message');
    }
  }

  getArea(): number {
    p = (this.a + this.b + this.c) / 2;
    square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius : number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('you error message');
    }
  }

  getArea(): number {
    square = Math.PI * this.radius ** 2;

    return Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('you error message');
    }
  }

  getArea(): number {
    square = this.width * this.height;

    return Math.round(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
