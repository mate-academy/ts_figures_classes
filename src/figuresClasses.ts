function round(num: number): number {
  return Math.floor(num * 100) / 100;
}
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(public color: string, public a: number, public b: number,
    public c: number) {
    if (Math.min(a, b, c) <= 0
    || Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('Incorrect sides');
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const p: number = 0.5 * (this.a + this.b + this.c);

    return round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(public color: string, public radius: number) {
    if (Math.min(radius) <= 0) {
      throw new Error('Incorrect radius');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    return round((Math.PI * this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(public color: string, public width: number,
    public heigth: number) {
    if (Math.min(width, heigth) <= 0) {
      throw new Error('Incorrect sides');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return round(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
