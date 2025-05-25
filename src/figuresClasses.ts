export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Wrong params!');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  public color: 'red' | 'green' | 'blue';

  public radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Wrong params!');
    }

    this.radius = radius;
    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  public color: 'red' | 'green' | 'blue';

  public width: number;

  public height: number;

  constructor(
    color: 'red' | 'green' | 'blue',

    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong params!');
    }

    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
