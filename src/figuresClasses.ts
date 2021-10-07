
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  static isValidFigure(a: number, b: number, c: number): void {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || c + b <= a
      || c + a <= b
    ) {
      throw new Error('This is not a triangle');
    }
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    Triangle.isValidFigure(this.a, this.b, this.c);
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = p * (p - this.a) * (p - this.b) * (p - this.c);

    return Number(Math.sqrt(s).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  static isValidFigure(r: number): void {
    if (r <= 0) {
      throw new Error('No figure');
    }
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    Circle.isValidFigure(this.radius);
  }

  getArea(): number {
    return Number((3.14 * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  static isValidFigure(a: number, b: number): void {
    if (a <= 0 || b <= 0) {
      throw new Error('No figure');
    }
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    Rectangle.isValidFigure(this.width, this.height);
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
