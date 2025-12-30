export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'Triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Sides cannot be negative');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape = 'Circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius < 0) {
      throw new Error('Radius cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'Rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width < 0 || this.height < 0) {
      throw new Error('Sides cannot be negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape.toLowerCase()} - ${Math.round(figure.getArea() * 100) / 100}`;
}
