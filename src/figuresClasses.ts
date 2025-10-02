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

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    const allowedColors = ['red', 'green', 'blue'] as const;

    if (!allowedColors.includes(color)) {
      throw new Error(`Invalid color:
        ${color}. Allowed: ${allowedColors.join(', ')}`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Invalid triangle side: a, b and c must be > 0; received a=${a}, b=${b}, c=${c}`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`
        Triangle sides a=${a}, b=${b}, c=${c} cannot form a triangle: longest side must be less than sum of the other two`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // полупериметр
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // округляем до сотых
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    // Валидация цвета
    const allowedColors = ['red', 'green', 'blue'] as const;

    if (!allowedColors.includes(color)) {
      throw new Error(`
        Invalid color: ${color}. Allowed: ${allowedColors.join(', ')}`);
    }

    if (radius <= 0) {
      throw new Error(`
        Invalid radius: expected > 0, received radius=${radius}`);
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100; // округляем до сотых
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    // Валидация цвета
    const allowedColors = ['red', 'green', 'blue'] as const;

    if (!allowedColors.includes(color)) {
      throw new Error(`
        Invalid color: ${color}. Allowed: ${allowedColors.join(', ')}`);
    }

    if (width <= 0 || height <= 0) {
      throw new Error(`
        Invalid dimensions: width and height must be > 0; received width=${width}, height=${height}`);
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // округляем до сотых
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
