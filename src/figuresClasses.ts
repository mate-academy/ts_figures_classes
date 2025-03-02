export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Sides must form a triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive number');
    }

    this.radius = radius;
  }

  public getArea(): number {
    return Math.round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public width: number;

  public height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return typeof figure;
}
