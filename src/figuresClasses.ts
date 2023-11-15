type Shape = 'circle' |'rectangle' | 'triangle';
type Color = 'blue' | 'green' |'red';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const longestSide = Math.max(a, b, c);

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || (longestSide >= (a + b + c - longestSide))
    ) {
      throw new Error('Incorrect dimentions');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = p * (p - a) * (p - b) * (p - c);

    return +(Math.sqrt(area).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect dimentions');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect dimentions');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
