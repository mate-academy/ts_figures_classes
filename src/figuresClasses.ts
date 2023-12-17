type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number, public b: number, public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Invalid triangle sides',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Circle = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const pi: number = Math.PI;
    const area: number = Math.floor(pi * this.radius * this.radius * 100) / 100;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Rectangle = Shape.Rectangle;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    if (length <= 0 || width <= 0) {
      throw new Error('Both length and width must be positive numbers');
    }
  }

  getArea(): number {
    return +(this.length * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'triangle':
      return `A ${figure.color} triangle - ${figure.getArea().toFixed(2)}`;
    case 'circle':
      return `A ${figure.color} circle - ${figure.getArea().toFixed(2)}`;
    case 'rectangle':
      return `A ${figure.color} rectangle - ${figure.getArea()}`;
    default:
      throw new Error('Unsupported figure type');
  }
}
