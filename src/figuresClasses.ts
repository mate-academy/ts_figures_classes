type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides must be greater than 0');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b + c - longestSide) {
      throw new Error('The longest side must be less than the others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;

    const s =
      Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;

    return s;
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error("This circle doesn't exist");
    }
  }

  getArea(): number {
    const { radius } = this;

    const s = Math.floor(Math.PI * radius ** 2 * 100) / 100;

    return s;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('The sides must be greater than 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const s = Math.floor(width * height * 100) / 100;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const square = figure.getArea();

  return `A ${color} ${shape} - ${square}`;
}
