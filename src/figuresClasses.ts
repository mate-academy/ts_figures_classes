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
    if (a <= 0) {
      throw new Error('Side "a" cannot be less than or equal to zero');
    }

    if (b <= 0) {
      throw new Error('Side "b" cannot be less than or equal to zero');
    }

    if (c <= 0) {
      throw new Error('Side "c" cannot be less than or equal to zero');
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
      throw new Error(`
        The radius of the circle is ${radius}, which cannot be zero or less.`);
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
    if (width <= 0) {
      throw new Error(
        `The width of the rectangle cannot be less than or equal to zero: ${width}`,
      );
    }

    if (height <= 0) {
      throw new Error(
        `The height of the rectangle cannot be less than or equal to zero: ${height}`,
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
