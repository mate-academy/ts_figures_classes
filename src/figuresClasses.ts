type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
  ) {
    this.shape = 'circle';

    if (a <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
    // return 2 * Math.PI * this.a;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
    // return this.a * this.b;
  }
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (!(this.a >= this.b && this.b >= this.c)) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const sp = (this.a + this.b + this.c) / 2;
    const aDifference = sp - this.a;
    const bDiffernece = sp - this.b;
    const cDifference = sp - this.c;
    const area = Math.sqrt(sp * aDifference * bDiffernece * cDifference);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
