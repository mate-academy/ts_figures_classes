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
    const biggestSide = Math.max(this.a, this.b, this.c);
    const perimetr = this.a + this.b + this.c;

    if (perimetr - biggestSide <= biggestSide) {
      throw new Error('invalid triangles side');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b) * (semiPerimetr - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('invalid circle radius');
    }

    this.shape = 'circle';
    this.color = color;
    this.r = r;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r * this.r) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('invalid rectangles side');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
