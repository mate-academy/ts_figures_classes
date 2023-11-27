type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color, public a: number,
    public b: number, public c: number) {
    if (c <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (!(a + b > c && a + c > b && b + c > a)) {
      throw new Error('your error message');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const result = Math.PI * this.radius * this.radius;

    return parseFloat(result.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
    public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const result = this.height * this.width;

    return parseFloat(result.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
