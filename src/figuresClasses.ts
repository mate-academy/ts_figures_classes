enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: Color,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle sides:'
        + 'the sum of two sides should be greater than the third side');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public radius: number, public color: Color) {
    if (radius <= 0) {
      throw new Error('Radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    return +Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public width: number,
    public height: number,
    public color: Color,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height of the rectangle must be greater than 0',
      );
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
