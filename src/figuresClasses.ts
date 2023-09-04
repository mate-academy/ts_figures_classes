export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid length'
      + 'Side length must be positive');
    }

    if (a + b <= c
      || b + c <= a
      || a + c <= b) {
      throw new Error('Invalid triangle sides'
      + 'The sum of any two sides must be greater than the third side');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid length'
      + 'Side length must be positive');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const s = Math.PI * (this.radius * this.radius);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid length'
      + 'Side length must be positive');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.round(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
