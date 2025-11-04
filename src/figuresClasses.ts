type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Invalid dimensions: ${a}, ${b}, ${c}. All must be > 0`);
    }

    const max = Math.max(a, b, c);
    const sumOthers = a + b + c - max;

    if (max >= sumOthers) {
      throw new Error(`Invalid triangle: one side is too long`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const A = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(A * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Invalid radius: ${radius}. Radius must be > 0`);
    }
  }

  getArea(): number {
    const A = this.radius ** 2 * Math.PI;

    return Math.floor(A * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`
        Invalid size: width=${width}, height=${height}. Values must be > 0
      `);
    }
  }

  getArea(): number {
    const A = this.width * this.height;

    return Math.floor(A * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
