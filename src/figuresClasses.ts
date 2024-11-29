enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  shape: Shape;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('negative side length');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('the side length >= than a sum of two other sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    protected radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('negative radius');
    }
  }

  getArea(): number {
    const s = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    protected width: number,
    protected height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('negative width or height');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
