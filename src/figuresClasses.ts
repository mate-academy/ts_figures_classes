
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The length of each side must be greater than 0');
    }

    let longSide: number;
    let sumOfSides: number;

    if (a > b && a > c) {
      longSide = a;
      sumOfSides = b + c;
    } else if (b > a && b > c) {
      longSide = b;
      sumOfSides = a + c;
    } else {
      longSide = c;
      sumOfSides = b + a;
    }

    if (longSide >= sumOfSides) {
      throw new Error('The longest side of a triangle\n'
      + 'greater than or equal sum of two others.\n'
      + 'They can not form a triangle.');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const square = Math.sqrt((s * (s - this.a) * (s - this.b) * (s - this.c)));

    return Math.trunc(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius:number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width:number,
    public height:number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('The length of each side must be greater than 0');
    }
  }

  getArea(): number {
    return Math.trunc((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
