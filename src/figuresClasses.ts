type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  private isInvalidTriangle(): boolean {
    const { a, b, c } = this;
    const checks = [
      a <= 0,
      b <= 0,
      c <= 0,
      a + b <= c,
      b + c <= a,
      c + a <= b,
    ];

    return checks.some(Boolean);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.isInvalidTriangle()) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const { a, b, c } = this;

    return Math.floor(Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'The radius must be greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  private isInvalidRectangle(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.isInvalidRectangle()) {
      throw new Error(
        'You can\'t build the rectangle on these sides',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

type Classes = Triangle | Circle | Rectangle;

export function getInfo(figure: Classes): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
