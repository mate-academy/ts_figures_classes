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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides cannot be <= 0');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= b + a)) {
      throw new Error('The longest side should be less than sum of others');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const a = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(a * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be <= 0');
    }
  }

  getArea(): number {
    const a = Math.PI * (this.radius * this.radius);

    return Math.floor(a * 100) / 100;
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
      throw new Error('Width or height cannot be <= 0');
    }
  }

  getArea(): number {
    const a = this.width * this.height;

    return Math.floor(a * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
