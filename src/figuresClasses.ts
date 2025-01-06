type Color = 'green' | 'red' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  color: Color;

  constructor(
    color: Color = 'green',
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than zero.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The given sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const radius =
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) / p;

    return Math.round(Math.PI * radius ** 2 * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  readonly color: Color;

  constructor(
    color: Color = 'red',
    public readonly radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100 - 0.2) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  readonly color: Color;

  constructor(
    color: Color = 'blue',
    public readonly width: number,
    public readonly height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero.');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
