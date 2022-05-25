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

function rounding(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One or more dimensions are incorrect');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return rounding(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;
    this.color = color;

    if (radius <= 0) {
      throw new Error('One or more dimensions are incorrect');
    }
  }

  getArea(): number {
    return rounding(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  color: Color;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('One or more dimensions are incorrect');
    }
  }

  getArea(): number {
    return rounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
