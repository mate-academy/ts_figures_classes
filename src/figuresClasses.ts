export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`
        The length of any side must be > 0
      `);
    } else if (!(b + c > a) || !(a + c > b) || !(a + b > c)) {
      throw new Error(`
        The longest side of a triangle must be >= than the sum of the other two
      `);
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`
        The radius must be > 0
      `);
    } else {
      this.radius = radius;
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`
      The length of any side must be > 0
      `);
    } else {
      this.width = width;
      this.height = height;
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Circle | Triangle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
