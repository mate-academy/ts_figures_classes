export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        `Invalid side length(s): a=${this.a}, b=${this.b}, c=${this.c}. All sides must be greater than zero.`,
      );
    }

    if (this.a + this.b <= this.c) {
      throw new Error(
        `Invalid triangle: ${this.a} + ${this.b} <= ${this.c}. The sum of two sides must be greater than the third.`,
      );
    }

    if (this.a + this.c <= this.b) {
      throw new Error(
        `Invalid triangle: ${this.a} + ${this.c} <= ${this.b}. The sum of two sides must be greater than the third.`,
      );
    }

    if (this.b + this.c <= this.a) {
      throw new Error(
        `Invalid triangle: ${this.b} + ${this.c} <= ${this.a}. The sum of two sides must be greater than the third.`,
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
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        `Invalid radius: ${radius}. Radius must be greater than zero.`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0) {
      throw new Error(
        `Invalid width: ${width}. Width must be greater than zero.`,
      );
    }

    if (this.height <= 0) {
      throw new Error(
        `Invalid height: ${height}. Height must be greater than zero.`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
