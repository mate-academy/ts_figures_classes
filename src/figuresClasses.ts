export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundAreaDown = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  public color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'error, the sides of the triangle must be greater than 0',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Incorrect side values (Triangle Inequality Theorem failed).',
      );
    }

    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundAreaDown(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  public color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error, radius must be greater than 0');
    }

    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundAreaDown(area);
  }
}

export class Rectangle implements Figure {
  public color: Color;

  public shape: Shape = Shape.Rectangle;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'error, the sides of the rectangle must be greater than 0',
      );
    }

    this.color = color;
  }

  getArea(): number {
    return roundAreaDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
