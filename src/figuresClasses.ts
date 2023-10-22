export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const calc = Math.floor(area * 100) / 100;

    return calc;
  }
}

export class Circle implements Figure {
  color: string;

  radius: number;

  shape: string = 'circle';

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    const calc = Math.floor(area * 100) / 100;

    return calc;
  }
}

export class Rectangle implements Figure {
  width: number;

  heigth: number;

  color: string;

  shape: string = 'rectangle';

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }

    this.heigth = height;
    this.color = color;
    this.width = width;
  }

  getArea(): number {
    const area = this.heigth * this.width;
    const calc = Math.floor(area * 100) / 100;

    return calc;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
