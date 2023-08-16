type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundAreaToHundreths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  getInfo(): string;
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new
      Error('Verily, the sides ought to be numbers of positive countenance.');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new
      Error(`Verily, the sides ${a}, ${b} and ${c} dost not make a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    const area: number = Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundAreaToHundreths(area);
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new
      Error('Forsooth, width and height must be numbers of positive stature.');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundAreaToHundreths(area);
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new
      Error('Verily, the radius ought to be a number of positive countenance.');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundAreaToHundreths(area);
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export function getInfo(figure: Figure): string {
  return figure.getInfo();
}
