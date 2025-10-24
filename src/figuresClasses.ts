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
      throw new Error('Sides of a triangle must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides of a triangle must form a triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public r: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius of a circle must be positive number');
    }

    this.shape = 'circle';
    this.color = color;
    this.r = r;
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
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
      throw new Error(
        'Width and height of a rectangle must be positive numbers',
      );
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
