type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,

  getArea(): number,
}

function isCompare(a: number, b: number, c: number): boolean {
  return a + b <= c || b + c <= a || c + a <= b;
}

export class Triangle implements Figure {
  shape = 'triangle' as Shape;

  color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    const isBigger = isCompare(this.a, this.b, this.c);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0 || isBigger) {
      throw new Error('Error -:)');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle' as Shape;

  color: Color;

  constructor(
    color: Color,
    private radius: number,
  ) {
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Error -:)');
    }
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle' as Shape;

  color: Color;

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error -:)');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
