type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
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
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle cannot be created');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Some of side <= 0');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    return Math.floor(
      Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be <= 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * (Math.PI * (this.radius ** 2))) / 100;
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
      throw new Error('Side must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
