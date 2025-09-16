export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  describe(): string;
}

// Utility for consistent area rounding
function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

function validateTriangle(a: number, b: number, c: number): void {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Triangle sides must be greater than 0');
  }

  const longest = Math.max(a, b, c);

  if (longest >= a + b + c - longest) {
    throw new Error(
      'Invalid triangle: longest side must be less than sum of the other two',
    );
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    validateTriangle(a, b, c);
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;

    // Triangle inequality check
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 0; // throws an error
    }

    // Heron's formula
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundArea(area);
  }

  describe(): string {
    return `A ${this.color} triangle - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }

  describe(): string {
    return `A ${this.color} circle - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }

  describe(): string {
    return `A ${this.color} rectangle - ${this.getArea()}`;
  }
}

export function getInfo(figure: Figure): string {
  return figure.describe();
}
