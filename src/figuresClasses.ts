type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private perimeter: number;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)
    ) {
      throw new Error('Wrong data');
    }
    this.perimeter = (this.a + this.b + this.c) / 2;
  }

  getArea(): number {
    const { a, b, c } = this;

    return Math.floor(Math.sqrt(this.perimeter
    * (this.perimeter - a)
    * (this.perimeter - b)
    * (this.perimeter - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, private radius: number) {
    if (radius <= 0) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private height: number,
    private width: number,
  ) {
    if (height <= 0
      || width <= 0) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
