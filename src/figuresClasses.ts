type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isValidTriangle
    = a > 0
    && b > 0
    && c > 0
    && a + b > c
    && b + c > a
    && a + c > b;

    if (!isValidTriangle) {
      throw new Error('The entered sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const semiPer = 0.5 * (this.a + this.b + this.c);

    return Math.floor(
      Math.sqrt(semiPer * (semiPer - this.a)
      * (semiPer - this.b) * (semiPer - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The entered radius can\'t form a circle');
    }
  }

  getArea(): number {
    const square = (Math.PI * (this.radius ** 2));

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public wigth: number,
    public height: number,
  ) {
    const isValidRectangle = wigth > 0 && height > 0;

    if (!isValidRectangle) {
      throw new Error('The entered sides can\t form a rectangle');
    }
  }

  getArea(): number {
    return this.wigth * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
