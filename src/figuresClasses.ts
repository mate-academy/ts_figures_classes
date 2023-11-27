function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(public color: Color, public a: number, public b: number,
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
  shape: Shape;

  constructor(public color: Color, public radius: number) {
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
  shape: Shape;

  constructor(public color: Color, public width: number,
    public height: number) {
    if (Math.min(width, height) <= 0) {
      throw new Error('Incorrect sides');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
