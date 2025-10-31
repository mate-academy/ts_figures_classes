export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[0] <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: string = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const raw = Math.PI * this.r * this.r;

    return Math.floor(raw * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
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
