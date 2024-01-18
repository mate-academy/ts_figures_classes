type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be > 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Triangle cannot be created');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const ph: number = (a + b + c) / 2;

    return Math.floor(
      Math.sqrt(ph * (ph - a) * (ph - b) * (ph - c)) * 100,
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
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius ** 2) * 100) / 100;
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
      throw new Error('Width and height must be > 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor((width * height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
