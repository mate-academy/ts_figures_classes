const rounder = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type TColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: TColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle parameters');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: TColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return +rounder(Math.PI * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: TColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
