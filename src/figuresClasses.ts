type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'The side of the figure cannot be less than or equal to zero',
      );
    }

    const maxLength: number = Math.max(a, b, c);
    const totalLength: number = a + b + c;

    if (maxLength >= totalLength - maxLength) {
      throw new Error("Sides 1, 2, and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const semiperimeter: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle cannot be zero or less');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'The side of the figure cannot be less than or equal to zero',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
