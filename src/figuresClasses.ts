export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const invalidSides = [
      a <= 0 ? `a = ${a}` : null,
      b <= 0 ? `b = ${b}` : null,
      c <= 0 ? `c = ${c}` : null,
    ]
      .filter(Boolean)
      .join(', ');

    if (invalidSides) {
      throw new Error(
        `Invalid side length(s): ${invalidSides}. Each must be greater than zero.`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Invalid triangle: the sum of any two sides must be greater than the third side (a = ${a}, b = ${b}, c = ${c}).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Invalid radius: radius = ${radius}. Radius must be greater than zero.`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    const invalidDimensions = [
      width <= 0 ? `width = ${width}` : null,
      height <= 0 ? `height = ${height}` : null,
    ]
      .filter(Boolean)
      .join(', ');

    if (invalidDimensions) {
      throw new Error(
        `Invalid dimension(s): ${invalidDimensions}. Each must be greater than zero.`,
      );
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
