export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of all sides should be greater than zero.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides should be greater than the third one.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('Length of diameter should be greater than zero.');
    }
  }

  getArea(): number {
    const area = this.a ** 2 * Math.PI;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Length of sides should be greater than zero.');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
