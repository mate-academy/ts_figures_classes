export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than zero');
    }

    const max = Math.max(a, b, c);
    const sumOfOthers = a + b + c - max;

    if (max >= sumOfOthers) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

// --- 3. Коло ---
export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
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
