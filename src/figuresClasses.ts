export interface Figure {
  readonly shape: string;
  readonly color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public readonly color: string,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides values must be greater than 0');
    }

    if (a + b <= c) {
      throw new Error(
        `Invalid triangle: The sum of sides a:(${a}) and b:(${b}) must be greater than side c:(${c}).`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Invalid triangle: The sum of sides b:(${b}) and c:(${c}) must be greater than side a:(${a}).`,
      );
    }

    if (c + a <= b) {
      throw new Error(
        `Invalid triangle: The sum of sides c:(${c}) and a:(${a}) must be greater than side b:(${b}).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const totalArea = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(totalArea * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public readonly color: string,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must exceed 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public readonly color: string,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height values of the rectangle must exceed 0');
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
