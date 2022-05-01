type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('There is missing dimention.');
    }

    if (
      a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)
    ) {
      throw new Error('There is now triangle with such dimentions.');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea(): number {
    const result = this.a * this.a * Math.PI;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('There is missing dimention.');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
