type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive numbers');
    }

    const sides = [a, b, c];
    const maxSide = Math.max(...sides);
    const sumOfOtherSides = sides.reduce(
      (sum, side) => (side === maxSide ? sum : sum + side),
      0,
    );

    if (maxSide >= sumOfOtherSides) {
      throw new Error('Sides do not satisfy the triangle inequality');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be positive numbers');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const result: number = Math.PI * this.radius * this.radius;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const result = this.width * this.height;

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const color = figure.color;
  const shape = figure.shape;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
