type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  private sides: number[];

  shape: Shape;

  constructor(public color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle: sides do not form a triangle');
    }

    this.sides = [a, b, c];
    this.shape = 'triangle';
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius of a circle must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height of a rectangle must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  const roundToTwoDecimalPlaces = (value: number): number => Math
    .round(value * 100) / 100;

  const area = roundToTwoDecimalPlaces(figure.getArea());

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
