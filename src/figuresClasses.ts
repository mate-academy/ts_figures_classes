export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Some side of triangle <= 0');
    }

    const longestSide = Math.max(a, b, c);
    const shortSidesSum = a + b + c - longestSide;

    if (longestSide >= shortSidesSum) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two other',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return roundArea(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Provided radius <= 0');
    }
  }

  getArea(): number {
    return roundArea(this.radius ** 2 * Math.PI);
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Some side of rectangle <= 0');
    }
  }

  getArea(): number {
    return roundArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
