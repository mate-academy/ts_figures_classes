type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: ShapeType = 'triangle';

  constructor(
    public readonly color: ColorType,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('These sides cannot form a triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: ShapeType = 'circle';

  constructor(
    public readonly color: ColorType,
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: ShapeType = 'rectangle';

  constructor(
    public readonly color: ColorType,
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
