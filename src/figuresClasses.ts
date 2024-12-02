type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  private area: number;

  public shape: Shape;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';

    if (!color) {
      throw new Error('Color is required');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of a triangle must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }

    this.color = color;
    this.color = color;

    const s = (a + b + c) / 2;

    this.area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Circle implements Figure {
  private area: number;

  public shape: Shape;

  constructor(
    public color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.shape = 'circle';
    this.area = Math.PI * Math.pow(radius, 2);
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  private area: number;

  public shape: Shape;

  constructor(
    public color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.shape = 'rectangle';
    this.area = width * height;
  }

  getArea(): number {
    return Number(this.area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
