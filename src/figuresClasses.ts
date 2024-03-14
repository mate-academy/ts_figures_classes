type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid values');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Invalid side of a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const area: number = (a + b + c) / 2;

    const result: number = +Math.sqrt(
      area * (area - this.a) * (area - this.b) * (area - this.c),
    ).toFixed(2);

    return result;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid values');
    }
  }

  getArea(): number {
    const result: string = (Math.PI * Math.pow(this.radius, 2)).toFixed(3);

    return +result.slice(0, result.length - 1);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public length: number,
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('Pass invalid values ');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.length;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
