type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function roundNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be positive numbers');
    }

    const max: number = Math.max(a, b, c);
    const sum: number = a + b + c;

    if (max >= (sum - max)) {
      throw new Error(
        'The longest side of a triangle should be >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number
      = roundNumber(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive number');
    }
  }

  getArea(): number {
    const area: number = roundNumber(Math.PI * this.radius * this.radius);

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be positive numbers');
    }
  }

  getArea(): number {
    const area: number = roundNumber(this.width * this.height);

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
