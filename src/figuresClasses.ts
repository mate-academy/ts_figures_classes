export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side lengths must be positive numbers');
    }

    const sizes: number[] = [this.a, this.b, this.c].sort((x, y) => x - y);

    if (sizes[2] >= sizes[1] + sizes[0]) {
      throw new Error('The provided sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(100 * s) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius lengths must be positive numbers');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius * this.radius) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Width and height lengths must be positive numbers');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.a * this.b) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
