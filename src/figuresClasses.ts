export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const bigNum = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || (bigNum >= (a + b + c - bigNum))) {
      throw new Error('your error message');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = p * (p - a) * (p - b) * (p - c);

    return Math.floor((Math.sqrt(area)) * 100) / 100;
  }
}

export class Circle {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius * radius) * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor((width * height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
