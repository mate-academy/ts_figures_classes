export interface Figure {
  shape: 'triangle' | `circle` | `rectangle`;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Figure['shape'] = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sorted: number[] = [a, b, c].sort((el1, el2) => el2 - el1);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('all sides should be positive number');
    }

    if (sorted[0] >= sorted[1] + sorted[2]) {
      throw new Error(
        'the longest side of a triangle must be  >= than a sum of two others',
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiparam = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiparam *
        (semiparam - this.a) *
        (semiparam - this.b) *
        (semiparam - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Figure['shape'] = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('all sides should be positive number');
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
