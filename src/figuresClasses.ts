type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape;

  a: number;

  b: number;

  c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side is less or equal 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Such triangle does not exist');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  a: number;

  constructor(
    public color: Color,
    a: number,
  ) {
    this.shape = 'circle';

    if (a <= 0) {
      throw new Error('Radius is less or equal 0');
    }

    this.a = a;
  }

  getArea(): number {
    const square = Math.PI * this.a ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  a: number;

  b: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Side is less or equal 0');
    }

    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const square = this.a * this.b;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
