type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Enter valid data');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Number(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)).toFixed(2));

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.shape = 'circle';
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
