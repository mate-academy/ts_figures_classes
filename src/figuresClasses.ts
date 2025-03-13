type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  readonly shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)
    ) {
      throw new Error('impossible triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Negative radius');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }

  readonly shape: Shape;
}
export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Negative side');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }

  readonly shape: Shape;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
