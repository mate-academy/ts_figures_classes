type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const roundArea = (area: number): number => Math.floor(area * 100) / 100;

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
  ) {}

  getArea(): number {
    const { a, b, c } = this;

    const errorChecking: boolean = a !== 0 && b !== 0 && c !== 0;
    const maxSide: number = Math.max(a, b, c);

    if (!errorChecking && maxSide >= a + b + c - maxSide) {
      throw new Error('Sizes are not correct');
    }

    const s = (a + b + c) / 2;

    return roundArea(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {}

  getArea(): number {
    const { radius } = this;

    if (radius <= 0) {
      throw new Error('Radius is not correct');
    }

    return roundArea(Math.PI * Math.pow(radius, 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {}

  getArea(): number {
    const { width, height } = this;

    if (width <= 0 || height <= 0) {
      throw new Error('Sizes are not correct');
    }

    return roundArea(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
