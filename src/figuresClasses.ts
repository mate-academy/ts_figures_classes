type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    ...sides: number[]
  ) {
    [this.a, this.b, this.c] = [...sides].sort((x, y) => x - y);

    if (
      sides.length < 3 ||
      sides.some((s) => s <= 0) ||
      this.c >= this.a + this.b
    ) {
      throw new Error('wrong args');
    }
    [this.a, this.b, this.c] = sides;
  }
}
export class Circle implements Figure {
  shape: Shape = 'circle';

  r: number;

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong args');
    }
    this.r = radius;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  a: number;

  b: number;

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }

  constructor(
    public color: Color,
    ...sides: number[]
  ) {
    if (sides.length < 2 || sides.some((n) => n <= 0)) {
      throw new Error('wrong args');
    }
    [this.a, this.b] = sides;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
