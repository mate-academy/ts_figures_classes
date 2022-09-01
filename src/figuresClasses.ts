type Colors = 'red' | 'blue' | 'green';
type Shape = 'circle' | 'triangle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Sides should be positive');
    }
  }

  getArea(): number {
    const p:number = (this.a + this.b + this.c) / 2;
    const
      area:number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,

  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Sides should be positive');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
