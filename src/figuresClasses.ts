enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

function rounding(n: number): number {
  return Math.floor(n * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('Incorrect dimention passed');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Incorrect dimention passed');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return rounding(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius passed');
    }
  }

  getArea(): number {
    return rounding(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect dimention passed');
    }
  }

  getArea(): number {
    return rounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
