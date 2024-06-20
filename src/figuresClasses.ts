export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a < 1 || b < 1 || c < 1) {
      throw new Error('your error message');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The given sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    this.shape = 'circle';

    if (a < 1) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (a < 1 || b < 1) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure): string {
  console.log(`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
