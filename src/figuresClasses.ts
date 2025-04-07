export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('each side must be greater than 0');
    }

    const maxSide = Math.max(this.a, this.b, this.c);
    const sumOtherSides = this.a + this.b + this.c - maxSide;

    if (maxSide >= sumOtherSides) {
      throw new Error(
        'the longest side of a triangle is < than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('the radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public length: number,
    public width: number,
  ) {
    if (this.width <= 0 || this.length <= 0) {
      throw new Error('width and length must be greater than 0 ');
    }
  }

  getArea(): number {
    const result = this.length * this.width;

    return parseFloat(result.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
