export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('any length is <= 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('any length is <= 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('any length is <= 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  if (figure instanceof Triangle) {
    const p = (figure.a + figure.b + figure.c) / 2;
    const s = Math.sqrt(p * (p - figure.a) * (p - figure.b) * (p - figure.c));

    return `A ${figure.color} triangle - ${s.toFixed(2)}`;
  }

  if (figure instanceof Circle) {
    const s = Math.PI * figure.radius ** 2;

    return `A ${figure.color} circle - ${s.toFixed(2)}`;
  }

  if (figure instanceof Rectangle) {
    const s = figure.getArea();

    return `A ${figure.color} rectangle - ${s}`;
  }

  return '';
}
