export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    const longest = Math.max(a, b, c);
    const sumOfTwoOthers = a + b + c - longest;

    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('Triangle sides must be > 0');
    } else if (longest >= sumOfTwoOthers) {
      throw new Error(
        `The longest side of a triangle is >= than a sum of two others`,
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: Figure['shape'] = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be > 0`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
    public shape: Figure['shape'] = 'rectangle',
  ) {
    if (width <= 0) {
      throw new Error(`Width must be > 0`);
    } else if (height <= 0) {
      throw new Error(`Height must be > 0`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
