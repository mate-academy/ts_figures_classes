type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive numbers');
    }

    const maxSide = Math.max(this.a, this.b, this.c);

    if (maxSide >= this.a + this.b + this.c - maxSide) {
      throw new Error(
        "Longest side of a triangle can't be larger than a sum of two others",
      );
    }
  }
}
export class Circle implements Figure {
  shape: Shape = 'circle';

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be positive number');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be positive numbers');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
