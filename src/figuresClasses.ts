type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  isValidTriangle(): boolean {
    return this.a === 0
      || this.b === 0
      || this.c === 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.isValidTriangle()) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter: number = 0.5 * (this.a + this.b + this.c);

    return Math.floor(
      Math.sqrt(
        semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c),
      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        'The radius must be greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  isValidRectangle(): boolean {
    const diagonal: number = Math.sqrt(this.width ** 2 + this.height ** 2);

    return diagonal <= this.width
      || diagonal <= this.height
      || this.width < 1
      || this.height < 1;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.isValidRectangle()) {
      throw new Error(
        'Wrong rectangle sides - width and height must be greater than 0',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
