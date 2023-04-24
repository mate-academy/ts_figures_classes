enum Shape {
  'triangle',
  'circle',
  'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape.triangle,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0)) {
      throw new Error('All values must be positive');
    }

    if (c >= (a + b) || b >= (a + c)
        || a >= (b + c)) {
      throw new Error(
        'The longest side must be greater or equal than a sum of two others',
      );
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(a * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape.circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape.rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    const a = this.width * this.height;

    return a;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
