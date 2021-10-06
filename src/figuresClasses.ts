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
    if (
      !(a + b > c)
      || !(b + c > a)
      || !(c + a > b)
      || a <= 0 || b <= 0 || c <= 0
    ) {
      throw new Error('Those length cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(
      (
        s
        * (s - this.a)
        * (s - this.b)
        * (s - this.c)
      )
      ** 0.5
      * 100,
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
      throw new Error('Radius must bigger than 0');
    }
  }

  getArea(): number {
    return Math.round(
      3.14
      * (this.radius ** 2)
      * 100,
    ) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.round(
      this.width * this.height * 100,
    ) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
