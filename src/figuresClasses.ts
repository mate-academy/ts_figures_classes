type Shape = ('triangle' | 'circle' | 'rectangle');
type Color = ('red' | 'green' | 'blue');
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
    if (this.a <= 0 && this.b <= 0 && this.c <= 0) {
      throw new Error('Size must be greater than 0');
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a
    ) {
      throw new Error('Incorrect size!');
    }
  }

  getArea(): number {
    const half: number = (this.a + this.b + this.c) / 2;
    const squareArea: number = half
    * (half - this.a)
    * (half - this.b)
    * (half - this.c);

    return Math.floor(Math.sqrt(squareArea) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Parameters must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
