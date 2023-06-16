export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle {
  shape: string;

  a: number;

  b: number;

  c: number;

  color: Figure;

  constructor(
    color: Figure,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('your error message');
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

export class Circle {
  shape: string;

  color: Figure;

  a: number;

  constructor(
    color: Figure,
    a: number,
  ) {
    if (a <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'circle';
    this.color = color;
    this.a = a;
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: string;

  color: Figure;

  a: number;

  b: number;

  constructor(
    color: Figure,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
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

export function getInfo(figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
