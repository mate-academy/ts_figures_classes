type AllowedColors = 'red' | 'green' | 'blue';
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: AllowedColors;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  constructor(
    public color: AllowedColors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be positive numbers.');
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error('All sides of the triangle must be positive numbers.');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const trianleArea = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(trianleArea * 100) / 100;
  }
}
export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: AllowedColors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}
export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: AllowedColors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height of the rectangle must be positive numbers.',
      );
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
