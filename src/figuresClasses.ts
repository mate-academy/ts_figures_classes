export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('Sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',

    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',

    public width: number,

    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  // const article = figure.color === 'red' ? 'A' : 'An';
  // return `${article} ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
