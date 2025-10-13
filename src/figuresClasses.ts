function isValidColor(color: string): color is 'red' | 'green' | 'blue' {
  return ['red', 'green', 'blue'].includes(color);
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (!isValidColor(color)) {
      throw new Error('Color must be one of: red, green, blue');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Invalid triangle: the sum of any two sides must be greater than ` +
          `the third side`,
      );
    }
    this.color = color as 'red' | 'green' | 'blue';
    this.a = a;
    this.b = b;
    this.c = c;
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

  private radius: number;

  constructor(color: string, radius: number) {
    if (!isValidColor(color)) {
      throw new Error('Color must be one of: red, green, blue');
    }

    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
    this.color = color as 'red' | 'green' | 'blue';
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    if (!isValidColor(color)) {
      throw new Error('Color must be one of: red, green, blue');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
    this.color = color as 'red' | 'green' | 'blue';
    this.width = width;
    this.height = height;
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
