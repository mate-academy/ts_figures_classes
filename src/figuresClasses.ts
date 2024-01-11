export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a + b <= c) {
      throw new Error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.round((Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
