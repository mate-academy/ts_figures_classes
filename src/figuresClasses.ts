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

function areDimensionsValid(...dimensions: number[]): void {
  if (dimensions.some((dimension: number) => dimension <= 0)) {
    throw new Error('One or more dimensions are equal to or less than zero');
  }
}

function rounding(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    areDimensionsValid(a, b, c);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One of the sides is longer than the sum of the others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return rounding(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    areDimensionsValid(radius);
  }

  getArea(): number {
    return rounding(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    areDimensionsValid(width, height);
  }

  getArea(): number {
    return rounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
