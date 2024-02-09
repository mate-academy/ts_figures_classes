type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number
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
      throw new Error('not triangle');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('not a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const a: number = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(a.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('not a circule');
    }
  }

  getArea(): number {
    const a: number = Math.PI * (this.r ** 2);

    return Math.floor(a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigh: number,
  ) {
    if (width <= 0 || heigh <= 0) {
      throw new Error('not a rectangle');
    }
  }

  getArea(): number {
    const a: number = this.width * this.heigh;

    return a;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
