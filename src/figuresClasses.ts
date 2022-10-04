enum OfFiruers {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: OfFiruers;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: OfFiruers = OfFiruers.triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const p = a + b + c;

    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('One of side is valid');
    }

    if ([a, b, c].some((side) => side >= p - side)) {
      throw new Error('Wrong sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const A = p - this.a;
    const B = p - this.b;
    const C = p - this.c;

    return Math.floor(Math.sqrt(p * A * B * C) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: OfFiruers = OfFiruers.circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radious is valid');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: OfFiruers = OfFiruers.rectangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
  ) {
    if ([a, b].some((side) => side <= 0)) {
      throw new Error('One of side is valid');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
