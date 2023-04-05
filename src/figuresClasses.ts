export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  a: number;
  b?: number;
  c?: number;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side of triangle can\'t be less than or equal to 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Sum of two other sides must be bigger than third side');
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;
    // eslint-disable-next-line
    const area = Math.sqrt(semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c))

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
  ) {
    this.shape = 'circle';

    if (a <= 0) {
      throw new Error('Circle radius can\'t be less than or equal to 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Sides of rectangle can\'t be less than or equal to 0');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
