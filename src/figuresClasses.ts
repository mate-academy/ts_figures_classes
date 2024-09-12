export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  constructor(
    a: number,
    b: number,
    c: number,
    public shape: 'triangle',
    public color: 'red' | 'green' | 'blue',
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Length is not allowed to be lower than zero');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Measurements do not match');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  radius: number;

  constructor(
    radius: number,
    public shape: 'circle',
    public color: 'red' | 'green' | 'blue',
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius is not allowed to be lower than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  constructor(
    width: number,
    height: number,
    public shape: 'rectangle',
    public color: 'red' | 'green' | 'blue',
  ) {
    this.width = width;

    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Measurements is not allowed to be lower than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
