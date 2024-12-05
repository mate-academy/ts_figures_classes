export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    const bigSide: number = Math.max(a, b, c);

    if (a + b + c - bigSide <= bigSide) {
      throw new Error(
        // eslint-disable-next-line max-len
        'The provided side lengths do not satisfy the triangle inequality theorem',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const A = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +A.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const A = Math.pow(this.r, 2) * Math.PI;

    return +A.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }
  }

  getArea(): number {
    const A = this.a * this.b;

    return +A.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
