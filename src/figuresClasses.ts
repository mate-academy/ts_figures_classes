type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'blue' | 'green' | 'red';

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
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle dimensions');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid side lengths');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid dimensions');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
