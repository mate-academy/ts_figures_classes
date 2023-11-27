type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Values have to be more than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This is a not triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;

    return Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius have to be more than zero');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Values have to be more than zero');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const { a, b } = this;

    return Math.floor(a * b * 100) / 100;
  }
}

export function getInfo(figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
