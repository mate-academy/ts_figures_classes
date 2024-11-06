export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Geometria xyiniya ebana');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  private a: number;

  constructor(color: string, a: number) {
    if (a <= 0) {
      throw new Error('Radius is not valid value');
    }

    this.color = color;
    this.a = a;
  }

  getArea(): number {
    const r2 = this.a * this.a;
    const s = 3.14159 * r2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  private a: number;

  private b: number;

  constructor(color: string, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Wrong parameters for rectangle');
    }

    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const s = this.a * this.b;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
