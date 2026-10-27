export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle sides must be positive numbers');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Invalid triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const aray = p * (p - this.a) * (p - this.b) * (p - this.c);
    const sqrt = Math.sqrt(aray);

    return Math.floor(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0 circle');
    }

    if (radius <= 0) {
      throw new Error('Invalid circle');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    const aray = Math.PI * this.radius ** 2;

    return Math.floor(aray * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
