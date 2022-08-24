export interface Figure {
  color: string,

  getArea(figure: string): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be a positive numbers');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) * 0.5;

    return Math.floor((Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be a positive numbers');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
