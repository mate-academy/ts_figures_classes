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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Invalid side length(s): a=${a}, b=${b}, c=${c}. All sides must be greater than zero.`,
      );
    }

    if (a + b <= c) {
      throw new Error(
        `Invalid triangle: ${a} + ${b} <= ${c}. The sum of two sides must be greater than the third.`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Invalid triangle: ${a} + ${c} <= ${b}. The sum of two sides must be greater than the third.`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Invalid triangle: ${b} + ${c} <= ${a}. The sum of two sides must be greater than the third.`,
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
    if (radius <= 0) {
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
    if (width <= 0) {
      throw new Error(
        `Invalid width: ${width}. Width must be greater than zero.`,
      );
    }

    if (height <= 0) {
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
