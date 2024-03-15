export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  public sides: [number, number, number];

  public color: string;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c) {
      throw new Error('Invalid triangle side lengths');
    }

    this.sides = [a, b, c];
    this.color = color;
  }

  getArea(): number {
    const s = this.sides.reduce((a, b) => a + b, 0) / 2;

    return Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]),
    );
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  public color: string;

  public radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return parseFloat(
      (Math.floor(Math.PI * this.radius ** 2 * 100) / 100).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  public width: number;

  public height: number;

  public color: string;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }

    this.height = height;
    this.width = width;
    this.color = color;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${Number.isInteger(figure.getArea()) ? figure.getArea() : figure.getArea().toFixed(2)}`;
}
