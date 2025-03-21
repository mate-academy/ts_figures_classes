export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0) {
      throw new Error('Side A must be greater than 0');
    }

    if (b <= 0) {
      throw new Error('Side B must be greater than 0');
    }

    if (c <= 0) {
      throw new Error('Side C must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        `The sum of the two shorter sides (${sides[0]} and ${sides[1]}) must be greater than the longest side (${sides[2]})`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be greater than 0');
    }

    if (height <= 0) {
      throw new Error('Height must be greater than 0');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
