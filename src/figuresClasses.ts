type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}
export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const countedRadius = Math.PI * this.radius * this.radius;

    return Math.floor(countedRadius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${Number(figure.getArea().toFixed(2))}`;
}
