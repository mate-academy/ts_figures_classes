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
      throw new Error('Error, a <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
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

    if (a <= 0 || b <= 0) {
      throw new Error('Error, a <= 0 || b <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
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

    if ((a >= b + c)
    || (b >= a + c)
    || (c >= b + a)
    || (a <= 0 || b <= 0 || c <= 0)) {
      throw new Error('Error, a >= b + c, b >= a + c, c >= b + a,'
        + ' a <= 0 || b <= 0 || c <= 0');
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
