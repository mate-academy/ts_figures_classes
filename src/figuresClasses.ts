export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('you must set valid sides');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('you must set valid sides');
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

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  color: string;

  shape: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('you must set valid radius');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  color: string;

  shape: string;

  width: number;

  heigth: number;

  constructor(color: string, width: number, heigth: number) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('you must set valid sides');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.heigth = heigth;
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
