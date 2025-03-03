export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of triangle sides <= 0');
    }

    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('Invalid triangle by input sides size');
    }
  }

  getArea(): number {
    const S = (this.a + this.b + this.c) / 2;
    const A = Math.sqrt(S * (S - this.a) * (S - this.b) * (S - this.c));

    return Math.floor(A * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius <= 0');
    }
  }

  getArea(): number {
    const A = Math.PI * this.radius ** 2;

    return Math.floor(A * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    if (this.width <= 0) {
      throw new Error('Width <= 0');
    }

    if (this.height <= 0) {
      throw new Error('Height <= 0');
    }
  }

  getArea(): number {
    const A = this.width * this.height;

    return Math.floor(A * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
