type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): string | number;
}

export function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('triangle does not exist!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('this circle does not exist!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
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
      throw new Error('this rectangle does not exist!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
