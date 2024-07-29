type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

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
      throw new Error('the side of the triangle is less than or equal to zero');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('the sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public shape: 'circle',
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(((this.radius * this.radius * Math.PI) / 2) * 100) / 100;
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
      throw new Error('the side of the rectangle is less than zero');
    }
  }

  getArea(): number {
    return Math.round(((this.width * this.height) / 2) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
