type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
    || b <= 0
    || c <= 0
    || a + b <= c
    || b + c <= a
    || c + a <= b) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
    public width: number,
    public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
