type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    const isPositive: boolean = this.a > 0 && this.b > 0 && this.c > 0;
    const isTriangle: boolean =
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a;

    if (!isPositive) {
      throw new Error('Invalid triangle. Triangle sides less than 0');
    }

    if (!isTriangle) {
      throw new Error(
        'Invalid triangle. One of sides bigger than sum other sides',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Invalid circle. Radius less or equal 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0) {
      throw new Error('Invalid rectangle. Width less or equal 0');
    }

    if (this.height <= 0) {
      throw new Error('Invalid rectangle. Height less or equal 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
