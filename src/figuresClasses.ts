type Color = 'red' | 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function findInvalidValue(...args: number[]): boolean {
  return args.some((value) => value <= 0);
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (findInvalidValue(height, width)) {
      throw new Error('Width or/and length less than zero');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (findInvalidValue(radius)) {
      throw new Error('Radius cannot be less than zero');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (findInvalidValue(a, b, c)) {
      throw new Error('Some side is less than or equal to zero');
    }

    if (
      a + b <= c
      || b + c <= a
      || a + c <= b
    ) {
      throw new Error('The longest side is >= than a sum of two others or');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
