type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'The side of a triangle cannot be negative or equal to zero',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of two sides of a triangle must be greater than the 3-rd side',
      );
    }

    this.shape = 'triangle';

    this.getArea = (): number => {
      const s = 0.5 * (a + b + c);
      const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

      return Math.floor(area * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'The radius of circle cannot be negative or equal to zero',
      );
    }
    this.shape = 'circle';

    this.getArea = (): number => {
      const area = Math.PI * radius ** 2;

      return Math.floor(area * 100) / 100;
    };
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'The width or height of a rectangle cannot be negative or zero',
      );
    }

    this.shape = 'rectangle';

    this.getArea = (): number => {
      const area = width * height;

      return Math.floor(area * 100) / 100;
    };
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
