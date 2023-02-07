function rounded(n: number): number {
  return Math.floor(n * 100) / 100;
}

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (a <= 0 || b <= 0 || c <= 0 || this.checkSide()) {
      throw new Error('error message');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return rounded(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }

  checkSide(): boolean {
    const longest = Math.max(this.a, this.b, this.c);

    return longest >= this.a + this.b + this.c - longest;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error message');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return rounded(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,

  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error message');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return rounded(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
