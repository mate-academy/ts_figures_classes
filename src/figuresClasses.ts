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
    const sum = this.a + this.b + this.c;
    const max = Math.max(this.a, this.b, this.c);
    const odds = sum - 2 * max;

    if ([this.a, this.b, this.c, odds].some((item) => item <= 0)) {
      throw new Error('can\'t form a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const triangleArea
    = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('can\'t form a circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('can\'t form a rectangle');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
