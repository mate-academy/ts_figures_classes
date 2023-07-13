enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  getArea(): number,
  shape?: Shape,
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Value cannot be 0 or less');
    }

    if (a >= b + c) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }

    if (c >= b + a) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }

    if (b >= a + c) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Value cannot be 0 or less');
    }
  }

  getArea(): number {
    return (Math.trunc(Math.PI * this.radius * this.radius * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Value cannot be 0 or less');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
