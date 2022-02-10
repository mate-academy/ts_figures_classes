type Color = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
