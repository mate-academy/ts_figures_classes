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
    if (Math.min(a, b, c) <= 0) {
      throw new Error('Triangle dimension cannot be less then 0.');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b + c - longestSide) {
      throw new Error('The sum of the lengths of any two sides'
      + 'of a triangle must be greater than the third side.');
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
      throw new Error('Circle radius cannot be less then 0.');
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
      throw new Error('Rectangle dimension cannot be less then 0.');
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
