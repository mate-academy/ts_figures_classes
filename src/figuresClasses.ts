type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side length must be greater than zero.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Wrong length sides of triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
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
      throw new Error('Error radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error length');
    }
  }

  getArea(): number {
    return (Math.floor(this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
