type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(...nums: number[]): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shapes = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Every side should be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(...params: number[]): number {
    const [a = this.a, b = this.b, c = this.c] = params;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Every side should be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }

    const s = (a + b + c) / 2;

    const result = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public radius: number,
    public shape: Shapes = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(...params: number[]): number {
    const [r = this.radius] = params;

    const result = Math.PI * (r * r);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
    public shape: Shapes = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(...params: number[]): number {
    const [w = this.width, h = this.height] = params;

    const result = w * h;

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
