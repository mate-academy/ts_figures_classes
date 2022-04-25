type Color = 'red'| 'green' | 'blue';
type Shape = 'triangle'| 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: 'triangle',
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error');
    }

    if (((a + b) >= c) || ((a + c) >= b) || ((b + c) >= a)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public shape: 'circle',
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: 'rectangle',
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
