type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides can\'t be <= 0');
    }

    if ((a + b + c - Math.max(a, b, c) <= Math.max(a, b, c))
    ) {
      throw new Error('Sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: string,

    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides can\'t be <= 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
