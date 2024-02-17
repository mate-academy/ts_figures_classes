enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
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
      throw new Error('Length of sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = {
      a: this.a, b: this.b, c: this.c,
    };
    const s: number = (a + b + c) / 2;

    return Math.trunc((Math.sqrt(s * (s - a) * (s - b) * (s - c))) * 100) / 100;
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
    return Math.trunc((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const area: string = figure.getArea().toString();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
