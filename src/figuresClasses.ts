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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect side length of the triangle');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Such triangle does not exist');
    }
    this.color = color;
  }

  getArea(): number {
    let s = (this.a + this.b + this.c) / 2;

    s = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius should be more than zero');
    }

    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The side of the rectangle must be more than zero');
    }
    this.color = color;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
