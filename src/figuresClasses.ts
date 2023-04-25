enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All values must be positive');
    }

    if (c >= (a + b) || b >= (a + c)
        || a >= (b + c)) {
      throw new Error(
        'The longest side must be greater or equal than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(a * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape= Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
