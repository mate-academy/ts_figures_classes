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

    if (a < 0 || b < 0 || c < 0) {
      throw new Error('your error message');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const sqrt = semi * (semi - this.a) * (semi - this.b) * (semi - this.c);

    return +Math.sqrt(sqrt).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color: Color, public radius: number) {
    this.shape = 'circle';

    if (radius < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
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

    if (width < 0 || height < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
