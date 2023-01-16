enum Shape {
  t = 'triangle',
  c = 'circle',
  r = 'rectangle',
}

enum Color {
  r = 'red',
  g = 'green',
  b = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.t;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a < 1 || this.b < 1 || this.c < 1) {
      throw new Error('Some length is <= 0');
    }

    if (this.c >= (this.a + this.b)) {
      const error = 'The longest side of a tngl less than a sum of two others';

      throw new Error(error);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.c;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 1) {
      throw new Error('Radius less then 1');
    }
  }

  getArea(): number {
    const s = this.radius * this.radius * Math.PI;

    return Math.trunc(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.r;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a < 1 || this.b < 1) {
      throw new Error('Some length is <= 0');
    }
  }

  getArea(): number {
    const s = this.a * this.b;

    return +s.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
