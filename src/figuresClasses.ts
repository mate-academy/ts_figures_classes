export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle side lengths must all be greater than 0.');
    }

    const longest: number = Math.max(this.a, this.b, this.c);
    const sumOfOther: number = this.a + this.b + this.c - longest;

    if (longest >= sumOfOther) {
      throw new Error(
        'Invalid triangle: the sum of any two sides must be ' +
          'greater than the remaining side.',
      );
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    private radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    private width: number,
    private height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0.');
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
