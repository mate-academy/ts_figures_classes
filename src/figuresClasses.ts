export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: Figure['color'];

  a: number;

  b: number;

  c: number;

  constructor(color: Figure['color'], a: number,
    b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid sides value');
    }
    this.shape = 'triangle';
    this.color = color;
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
  shape: 'circle';

  color: Figure['color'];

  r: number;

  constructor(color: Figure['color'], r: number) {
    if (r <= 0) {
      throw new Error('Invalid radius value');
    }
    this.shape = 'circle';
    this.color = color;
    this.r = r;
  }

  getArea(): number {
    const area = Math.PI * this.r ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Figure['color'];

  a: number;

  b: number;

  constructor(color: Figure['color'], a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid sides value');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
