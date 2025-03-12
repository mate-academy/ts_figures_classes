enum Shape {
  'Rectangle' = 'rectangle',
  'Circle' = 'circle',
  'Triangle' = 'triangle',
}

enum Color {
  'Red' = 'red',
  'Blue' = 'blue',
  'Green' = 'green',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function round(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be > 0.');
    }

    const max: number = Math.max(a, b, c);
    const sum: number = a + b + c;

    if (max >= sum - max) {
      throw new Error(
        'Every triangle side must be shorter then sum of other sides.',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return round(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0.');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return round(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be > 0.');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
