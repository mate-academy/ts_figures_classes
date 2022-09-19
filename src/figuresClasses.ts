export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: () => number,
}

function isTriangle(a: number, b: number, c: number): boolean {
  if (a > b && a > c) {
    if (a >= b + c) {
      return false;
    }
  }

  if (b > a && b > c) {
    if (b >= a + c) {
      return false;
    }
  }

  if (c > a && c > b) {
    if (c >= a + b) {
      return false;
    }
  }

  return true;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`
        The sides of the triangle must be a positive number
      `);
    }

    if (!isTriangle(a, b, c)) {
      throw new Error(`
        The sides of the triangle must be a positive number
      `);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      (s * (s - this.a) * (s - this.b) * (s - this.c)) ** (1 / 2) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(`
        The radius must be a positive number
      `);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(`
        The sides of the rectangle must be a positive number
      `);
    }
  }

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
