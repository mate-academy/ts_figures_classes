enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(a * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
