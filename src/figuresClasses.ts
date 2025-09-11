type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0) {
      throw new Error(`Parameter 'a' must be > 0, got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Parameter 'b' must be > 0, got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Parameter 'c' must be > 0, got ${c}`);
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Sides ${a}, ${b}, and ${c} can't form a triangle: triangle inequality violated`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`Parameter 'radius' must be > 0, got ${radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0) {
      throw new Error(`Parameter 'width' must be > 0, got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Parameter 'height' must be > 0, got ${height}`);
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
