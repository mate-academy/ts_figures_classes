type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  isInvalidTriangle(): boolean {
    return this.a === 0
      || this.b === 0
      || this.c === 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b;
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

    return Math.floor(Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
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

  isInvalidRectangle(): boolean {
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
