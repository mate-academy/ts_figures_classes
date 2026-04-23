export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: `triangle` = `triangle`;

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number = 0,
    private b: number = 0,
    private c: number = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of triangle must be positive numbers!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides of a' +
          'triangle must be greater than the third side',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const val = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(val * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }
  }

  getArea(): number {
    const val = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(val * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number = 0,
    private b: number = 0,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Length and Width should be positive.');
    }
  }

  getArea(): number {
    const val = this.a * this.b;

    return Math.floor(val * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
