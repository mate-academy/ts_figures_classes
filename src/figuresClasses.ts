export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    readonly shape: 'triangle' = 'triangle',
  ) {
    const max = Math.max(this.a, this.b, this.c);

    if (max >= this.a + this.b + this.c - max) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side lengths must be > 0');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    readonly shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    readonly shape: 'rectangle' = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('side lengths must be > 0');
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
