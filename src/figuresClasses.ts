export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error(`Triangle with sides ${a}, ${b}, ${c} can't exist`);
    }

    this.color = color;
    this.shape = 'triangle';
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
  color: 'red' | 'green' | 'blue';

  shape: string;

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: string;

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }

    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
