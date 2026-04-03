export interface Figure {
  readonly shape: 'triangle' | 'circle' | 'rectangle';
  readonly color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  color: Figure['color'];

  private a: number;

  private b: number;

  private c: number;

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    this.color = color;

    const maxSide = Math.max(a, b, c);
    const sumOthers = a + b + c - maxSide;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (maxSide >= sumOthers) {
      throw new Error('Triangle sides do not form a valid triangle');
    }

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
  readonly shape = 'circle';

  color: Figure['color'];

  private radius: number;

  constructor(color: Figure['color'], radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  color: Figure['color'];

  private width: number;

  private height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
