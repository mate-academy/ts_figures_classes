type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea();
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

    if ((a <= 0 || b <= 0 || c <= 0)
    || (a + b <= c || a + c <= b || b + c <= a)) {
      throw new Error('Triangle cannot have side length <=0!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Circle cannot have radius <= 0!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(100 * area) / 100;
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

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle cannot side length <= 0!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
