export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'blue' | 'green';

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    color: 'red' | 'blue' | 'green',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle');
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'blue' | 'green';

  radius: number;

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }

  constructor(color: 'red' | 'blue' | 'green', r: number) {
    if (r <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = r;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'blue' | 'green';

  height: number;

  width: number;

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }

  constructor(color: 'red' | 'blue' | 'green', height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.height = height;
    this.width = width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
