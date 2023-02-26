type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length cannot be zero or less');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The any side length cannot be less than sum of both');
    }
  }

  getArea() : number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length cannot be zero or less');
    }
  }

  getArea() : number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or height cannot be zero or less');
    }
  }

  getArea() : number {
    const { width, height } = this;

    return Math.round(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
