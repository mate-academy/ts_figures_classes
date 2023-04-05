type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const invalidLength: boolean = (a <= 0 || b <= 0 || c <= 0);
    const invalidTriangle: boolean = (a + b <= c || a + c <= b || b + c <= a);

    if (invalidLength || invalidTriangle) {
      throw new Error('Invalid length');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    const area: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const { r } = this;

    const area: number = Math.PI * r * r;

    return Math.floor(area * 100) / 100;
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
      throw new Error('Invalid length');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
