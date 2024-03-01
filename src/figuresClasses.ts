type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Value should be bigger then 0');
    }

    if (
      this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b
    ) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    let area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number = 0,
    public c: number = 0,
    public shape: Shape = 'circle',
  ) {
    if (this.a <= 0) {
      throw new Error('Value should be bigger than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number = 0,
    public shape: Shape = 'rectangle',
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Value should be bigger than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
