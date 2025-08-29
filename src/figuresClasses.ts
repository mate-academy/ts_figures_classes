const ALLOWED_COLORS = new Set(['red', 'green', 'blue']);

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!ALLOWED_COLORS.has(color)) {
      throw new Error(
        `Invalid color: "${color}". Allowed values are "red", "green", "blue".`,
      );
    }
    this.color = color as 'red' | 'green' | 'blue';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side of the triangle must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Triangle inequality violated: the sum of any two sides must be greater than the third. Received sides: a=${a}, b=${b}, c=${c}`,
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

  color: 'red' | 'green' | 'blue';

  constructor(
    color: string,
    public radius: number,
  ) {
    if (!ALLOWED_COLORS.has(color)) {
      throw new Error(
        `Invalid color: "${color}". Allowed values are "red", "green", "blue".`,
      );
    }
    this.color = color as 'red' | 'green' | 'blue';

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    if (!ALLOWED_COLORS.has(color)) {
      throw new Error(
        `Invalid color: "${color}". Allowed values are "red", "green", "blue".`,
      );
    }
    this.color = color as 'red' | 'green' | 'blue';

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
