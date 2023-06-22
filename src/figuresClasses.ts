type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      a + b <= c || b + c <= a || c + a <= b || a <= 0 || b <= 0 || c <= 0
    ) {
      throw new Error('You cannot create a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area: number
     = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
  ) {
    this.shape = 'circle';

    if (a <= 0) {
      throw new Error('You cannot create a circle');
    }
  }

  getArea(): number {
    const square = Math.PI * (this.a ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('You cannot create a rectangle');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
