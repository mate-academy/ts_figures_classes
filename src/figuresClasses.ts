export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isValid()) {
      throw new Error('Impossible to create triangle with such parameters');
    }
  }

  isValid(): boolean {
    const sides = [this.a, this.b, this.c].sort((a, b) => b - a);
    const isSideTooSmall = sides.some((side) => side <= 0);
    const isSideTooLarge = sides[0] >= sides[1] + sides[2];

    return !isSideTooSmall && !isSideTooLarge;
  }

  getArea(): number {
    const s = [this.a, this.b, this.c].reduce((acc, curr) => acc + curr, 0) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(public color: Figure['color'], public radius: number) {
    if (radius <= 0) {
      throw new Error(`Can not create circle with radius = ${this.radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Can not create rectangle with parameters that <= 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
