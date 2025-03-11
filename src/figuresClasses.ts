type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getTriangleArea(a: number, b: number, c: number): number {
  const p: number = (a + b + c) / 2;
  const area: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return Math.floor(area * 100) / 100;
}

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
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('length should be more than 0');
    }

    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a
    ) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    return getTriangleArea(this.a, this.b, this.c);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('the radius is less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('the side is less then 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
