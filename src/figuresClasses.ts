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
    if (typeof a !== 'number' || !Number.isFinite(a) || a <= 0) {
      throw new Error('Side a must be a positive number');
    }

    if (typeof b !== 'number' || !Number.isFinite(b) || b <= 0) {
      throw new Error('Side b must be a positive number');
    }

    if (typeof c !== 'number' || !Number.isFinite(c) || c <= 0) {
      throw new Error('Side c must be a positive number');
    }

    const maxSide = Math.max(a, b, c);
    const sum = a + b + c;

    if (maxSide >= sum - maxSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (typeof radius !== 'number' || !Number.isFinite(radius) || radius <= 0) {
      throw new Error('Radius must be a finite positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (typeof width !== 'number' || !Number.isFinite(width) || width <= 0) {
      throw new Error('Width must be a finite positive number');
    }

    if (typeof height !== 'number' || !Number.isFinite(height) || height <= 0) {
      throw new Error('Height must be a finite positive number');
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
