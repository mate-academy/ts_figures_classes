type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const roundDown = (num: number): number => Math.floor(num * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('Wrong values');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
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
      throw new Error('Wrong values');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
