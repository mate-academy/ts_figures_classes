export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: string = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'A side cannot be greater than the sum of the other two sides',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: string = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: string = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
