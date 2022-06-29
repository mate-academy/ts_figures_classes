type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all sides must have a positive length');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('one side must be shorter than sum of the others sides');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const arrea = Math.floor(Math.sqrt(semiP * (semiP - this.a)
      * (semiP - this.b) * (semiP - this.c)) * 100) / 100;

    return arrea;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public r: number) {
    if (r <= 0) {
      throw new Error('radius must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('all sides must have a positive length');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const arrea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${arrea}`;
}
