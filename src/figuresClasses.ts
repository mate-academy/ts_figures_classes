export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: 'red' | 'green' | 'blue',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle');
    }

    const max = Math.max(a, b, c);
    const sum = a + b + c - max;

    if (max >= sum) {
      throw new Error('Error!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const floor = Math.floor(area * 100) / 100;

    return floor;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error!');
    }
  }

  getArea(): number {
    const pi = Math.PI * this.radius * this.radius;
    const floor = Math.floor(pi * 100) / 100;

    return floor;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public width: number,
    public height: number,
    public color: 'red' | 'green' | 'blue',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error!');
    }
  }

  getArea(): number {
    const s = this.width * this.height;
    const floor = Math.floor(s * 100) / 100;

    return floor;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} ${figure.getArea()}`;
}
