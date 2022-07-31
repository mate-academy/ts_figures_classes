enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = ShapeType.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be greater than zero');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The sum of two sides must be less than the third side');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b)
        * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = ShapeType.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius. The radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = ShapeType.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid sides. The sides must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
