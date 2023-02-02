type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
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
    let biggest = this.a;

    if (this.b > this.a && this.b > this.c) {
      biggest = this.b;
    }

    if (this.c > this.a && this.c > this.b) {
      biggest = this.c;
    }

    if (biggest >= this.a + this.b + this.c - biggest) {
      throw new Error('error message');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = 1 / 4 * (Math.sqrt((this.a + this.b + this.c) * (0 - this.a
      + this.b + this.c) * (this.a - this.b
        + this.c) * (this.a + this.b - this.c)));

    return Math.floor((area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor((area) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public widht: number,
    public height: number,
  ) {
    if (widht <= 0 || height <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = this.widht * this.height;

    return Math.floor((area) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
