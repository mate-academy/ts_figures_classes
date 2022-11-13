type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Invalid side');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('This is not triangle');
    }
  }

  getArea(): number {
    const half = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(half * (half - this.a)
      * (half - this.b) * (half - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius < 0) {
      throw new Error('This is not circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width < 0 || this.height < 0) {
      throw new Error('This is not rectagle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
