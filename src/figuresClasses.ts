type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  square: number;
}

export class Triangle {
  s: number;

  square: number;

  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.s = (a + b + c) / 2;

    this.square = Math.round(Math.sqrt(this.s * (this.s - a)
    * (this.s - b) * (this.s - c)) * 100) / 100;
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Check, side is negative');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('One side wrong');
    }
  }

  getArea(): number {
    const square: number = Math.sqrt(this.s * (this.s - this.a)
    * (this.s - this.b) * (this.s - this.c));

    return square;
  }
}

export class Circle {
  shape: Shape;

  square: number;

  constructor(public color: Color, public radius: number) {
    this.shape = 'circle';

    this.square = Math.floor(Math.PI * this.radius
    * this.radius * 100) / 100;

    if (this.radius <= 0) {
      throw new Error('Check, radius is negative');
    }
  }

  getArea(): number {
    const square: number
    = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return square;
  }
}

export class Rectangle {
  shape: Shape;

  square: number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.square = this.width * this.height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Check, side is negative');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.square}`;
}
