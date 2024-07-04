enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRoundedNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('Sides must be positive and not equal to zero and the sum of the lengths of any two sides must be greater than or equal to the length of the remaining side');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triSqr = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return getRoundedNumber(triSqr);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('Radius must be a positive number greater than zero');
    }
  }

  getArea(): number {
    const circleSqr = Math.PI * Math.pow(this.r, 2);

    return getRoundedNumber(circleSqr);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width and height must be positive numbers greater than zero');
    }
  }

  getArea(): number {
    const rectSqr = this.width * this.height;

    return getRoundedNumber(rectSqr);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
