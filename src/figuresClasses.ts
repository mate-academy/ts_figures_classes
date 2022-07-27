type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape:Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length is smaller than 0');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('The longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const x = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(x * (x - this.a) * (x - this.b) * (x - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length is smaller than 0');
    }
  }

  getArea(): number {
    const square = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return square;
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
      throw new Error('Width or height is smaller than 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return square;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
