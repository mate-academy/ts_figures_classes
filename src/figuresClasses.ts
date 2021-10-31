type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): Number;

}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error');
    }

    const smalls = this.a + this.b + this.c - Math.max(this.a, this.b, this.c);

    if (Math.max(this.a, this.b, this.c) >= (smalls)) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const longest = Math.max(+this.a, +this.b, +this.c);
    const p = (this.a + this.b + this.c) / 2;
    const sqrt = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    const h = (2 / longest) * sqrt;

    return +(1 / 2 * longest * h * 100).toFixed() / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return (Math.floor(Math.PI * this.radius * this.radius * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    if (this.width === 0 || this.height === 0) {
      throw new Error('Error');
    }

    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
