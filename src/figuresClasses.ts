export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    return Math.floor(+(Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.height <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
