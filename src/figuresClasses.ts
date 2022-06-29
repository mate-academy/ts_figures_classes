export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides length shoud be positive');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Sum of two sides less than other side');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.floor(
      Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c))) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length shoud be positive');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One or two sides are less or equal to 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
