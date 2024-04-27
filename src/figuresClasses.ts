export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of all sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('the sum of two sides must not be less than one side');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Number(
      Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c), 0.5).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the radius must be greater than zero');
    }
  }

  getArea(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}
export class Rectangle implements Figure {
  readonly shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be greater than zero');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
