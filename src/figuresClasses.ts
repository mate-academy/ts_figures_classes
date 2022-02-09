export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export function roundToHundredth(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => x - y);

    if (a <= 0
      || b <= 0
      || c <= 0
      || sides[2] >= sides[0] + sides[1]) {
      throw new Error('Invalid side length');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToHundredth(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return roundToHundredth(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return roundToHundredth(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
