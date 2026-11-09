export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    if (b + c <= a || a + c <= b || a + b <= c) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const parameter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      parameter *
        (parameter - this.a) *
        (parameter - this.b) *
        (parameter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
