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
      throw new Error('Side can not be 0 or less than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side is bigger than two other');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can noy be 0 or less than 0');
    }
  }

  getArea(): number {
    const s = Math.PI * (this.radius ** 2);

    return Math.floor(s * 100) / 100;
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
      throw new Error('Side can not be 0 or less than 0');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
