type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private longestSide: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('value is equal to or less than zero');
    }

    this.longestSide = Math.max(this.a, this.b, this.c);

    if (this.longestSide >= this.a + this.b + this.c - this.longestSide) {
      throw new Error(`the longest side of a triangle is >=
        than a sum of two others`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('value is equal to or less than zero');
    }
  }

  getArea(): number {
    return Math.floor(((Math.PI * this.radius * this.radius) * 100)) / 100;
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
      throw new Error('value is equal to or less than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
